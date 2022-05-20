import React from "react";
import Image from "next/image";

export const AvatarSizes = {
  XSMALL: "var(--avatar-size-xsmall)",
  SMALL: "var(--avatar-size-small)",
  MEDIUM: "var(--avatar-size-medium)",
  LARGE: "var(--avatar-size-large)",
  XLARGE: "var(--avatar-size-xlarge)",
} as const;

export interface AvatarProps {
  src: string;
  size: keyof typeof AvatarSizes;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, size } = props;
  return (
    <>
      <div className="avatar">
        <Image role="link" aria-hidden={true} src={src} layout="fill" objectFit="contain" />
        <div className="avatar-interaction mouse-over" />
      </div>
      <style jsx>{`
        .avatar-interaction {
          position: absolute;
          width: inherit;
          height: inherit;
        }
        .avatar {
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius-rounded);
          user-select: none;
          width: ${AvatarSizes[size]};
          height: ${AvatarSizes[size]};
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
