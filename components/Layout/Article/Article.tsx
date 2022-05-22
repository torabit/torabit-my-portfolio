import { ReactElement, ReactNode } from "react";

interface ArticleProps {
  title: string;
  children: ReactNode;
}

export const Article: React.FC<ArticleProps> = (props): ReactElement => {
  const { title, children } = props;
  return (
    <>
      <article className="content-wrapper">
        <h1 className="title">{title}</h1>
        {children}
      </article>
      <style jsx>{`
        .content-wrapper {
          text-align: center;
          width: 100%;
        }
        .title {
          color: var(--color-text-accent);
        }
      `}</style>
    </>
  );
};
