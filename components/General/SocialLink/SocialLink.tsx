import { HTMLAttributeAnchorTarget, ReactElement, ReactNode } from "react";

interface SocialLinkProps {
  link: string;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}

export const SocialLink: React.FC<SocialLinkProps> = (props): ReactElement => {
  const { link, children, target = "_blank" } = props;
  return (
    <>
      <a href={link} target={target} rel="noreferrer">
        <div className="social-link-wrapper">{children}</div>
      </a>

      <style jsx>{`
        .social-link-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 4rem;
          height: 4rem;
          border-radius: var(--border-radius-rounded);
          box-shadow: var(--shadow-elevation-1);
          border-width: 0.2rem;
          transition: 0.1s;
        }
        .social-link-wrapper:hover {
          box-shadow: var(--shadow-elevation-2);
        }
        .social-link-wrapper:active {
          box-shadow: var(--shadow-elevation-1);
        }
      `}</style>
    </>
  );
};
