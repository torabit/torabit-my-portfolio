import React, { ReactElement, ReactNode, useRef, useState } from "react";
import { useClickAway, useLockBodyScroll } from "@/hooks/index";
import { IoMdCloseCircle } from "react-icons/io";

interface ModalOverlayProps {
  closeModal: () => void;
  children?: ReactNode;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = (props): ReactElement => {
  const { closeModal, children } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    closeModal();
  });
  useLockBodyScroll();
  const closeButtonColor = isHover ? "var(--color-white)" : "var(--color-opac-w-10)";
  return (
    <>
      <div className="overlay">
        <div className="operable" ref={ref}>
          <button
            className="close-modal"
            aria-label="プロフィールを閉じる"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={closeModal}
          >
            <IoMdCloseCircle size="3rem" color={closeButtonColor} />
          </button>
          {children}
        </div>
      </div>
      <style jsx>{`
        .overlay {
          position: fixed;
          z-index: var(--z-index-modal);
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: var(--color-opac-b-12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-modal {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: none;
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          user-select: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
