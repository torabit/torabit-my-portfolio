import React, { useContext, useRef, useState, ReactNode, ReactElement, useEffect, RefObject } from "react";
import { useClickAway } from "@/hooks/index";

const dropdownRef: Partial<RefObject<HTMLDivElement>> = {};
const Context = React.createContext({
  show: false,
  setShow: (v: boolean) => {},
  ref: dropdownRef,
});

const useDropdownContext = () => {
  return useContext(Context);
};

interface DropdownProps {
  children: ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = (props): ReactElement => {
  const { children } = props;

  const [show, setShow] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="dropdown" ref={ref}>
        <Context.Provider value={{ show, setShow, ref }}>{children}</Context.Provider>
      </div>
      <style jsx>{`
        .dropdown {
          position: relative;
        }
      `}</style>
    </>
  );
};

interface DropdownToggleProps {
  children: ReactNode;
  tooltipDisabled?: boolean;
  ariaLabel?: string;
}

export const DropdownToggle: React.FC<DropdownToggleProps> = (props): ReactElement => {
  const { children, tooltipDisabled = false, ariaLabel } = props;

  const { show, setShow } = useDropdownContext();
  const ref = useRef<HTMLButtonElement>(null);

  const onPress = () => setShow(!show);

  // dropdownの状態によってtooltipを表示するか判定
  const [tippyDisabled, setTippyDisabled] = useState<boolean>(tooltipDisabled);
  useEffect(() => {
    if (!tooltipDisabled) {
      setTippyDisabled(show);
    }
  }, [show]);
  return (
    <>
      <button
        className="dropdown-toggle"
        aria-haspopup="true"
        aria-expanded={show}
        aria-label={`${ariaLabel}`}
        ref={ref}
        onClick={onPress}
      >
        {children}
      </button>
      <style jsx>{`
        .dropdown-toggle {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

interface DropdownMenuProps {
  children: ReactNode;
  width: string;
  anchorOrigin: {
    positionX: "left" | "right";
    positionY: "top" | "bottom";
    translateX: number;
    translateY: number;
  };
}

export const DropdownMenu: React.FC<DropdownMenuProps> = (props): ReactElement => {
  const { children, width, anchorOrigin } = props;

  const { show, setShow, ref } = useDropdownContext();
  useClickAway(ref as RefObject<HTMLDivElement>, () => {
    setShow(false);
  });

  const closeOnESC = (e: KeyboardEvent) => {
    if (e.key === "Escape") setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("keydown", closeOnESC);
      return () => {
        document.removeEventListener("keydown", closeOnESC);
      };
    }
  }, [show]);
  return (
    <>
      {show ? (
        <div className="dropdown-menu" role="menu">
          {children}
        </div>
      ) : null}
      <style jsx>{`
        .dropdown-menu {
          position: absolute;
          box-shadow: var(--shadow-elevation-2);
          background-color: var(--color-background-base);
          border-radius: var(--border-radius-large);
          width: ${width};
          ${anchorOrigin.positionX}: ${anchorOrigin.translateX}rem;
          ${anchorOrigin.positionY}: ${anchorOrigin.translateY}rem;
          animation-name: openedDropdownAnimation;
          animation-duration: 250ms;
          animation-delay: 0ms;
          animation-fill-mode: forwards;
          opacity: 0;
          z-index: 1;
        }
        @keyframes openedDropdownAnimation {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

interface DropdownMenuItemProps {
  children: ReactNode;
  closeOnSelect?: boolean;
  tabIndex?: number;
  onPress?: () => void;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = (props): ReactElement => {
  const { children, closeOnSelect = false, tabIndex = -1, onPress } = props;
  const { setShow } = useDropdownContext();
  const onClick = () => {
    if (closeOnSelect) setShow(false);
    if (onPress) onPress();
  };
  /*
   * closeOnSelectについて調査しないといけない
   * closeOnSelect = trueの場合、子要素にAnchor要素があったとしたら
   * Link先を開く前にmenuをcloseしてしまうため画面遷移ができない。
   */
  return (
    <>
      <div onClick={onClick} className="dropdown-menu-item" tabIndex={tabIndex} role="menuitem">
        {children}
      </div>
      <style jsx>{`
        .dropdown-menu-item {
          width: 100%;
          user-select: none;
          border-radius: inherit;
          cursor: pointer;
          padding: 1rem;
          font-size: var(--font-size-7);
        }
        .dropdown-menu-item:hover {
          background: var(--color-background-dropdown-item);
        }
      `}</style>
    </>
  );
};
