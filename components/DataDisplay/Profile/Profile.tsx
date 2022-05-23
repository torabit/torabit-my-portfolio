import { Avatar } from "@/DataDisplay/Avatar";
import Image from "next/image";
import { ContentsUtil } from "@/utils/contentsUtil";
import { SocialLink } from "@/General/SocialLink";
import { FiGithub } from "react-icons/fi";
import { GrSoundcloud } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";

export const Profile: React.FC = () => {
  const contentsUtil = new ContentsUtil();
  const contents = contentsUtil.getContents();

  return (
    <>
      <div className="profile-wrapper">
        <div className="profile-header">
          <Image src="/images/header.jpg" role="link" aria-hidden={true} layout="fill" objectFit="contain" />
        </div>
        <div className="profile-contents">
          <div className="avatar-wrapper">
            <Avatar src="/images/avatar_icon.png" size="XLARGE" />
          </div>
          <div className="profile-meta-data">
            <p className="profile-name">{contents.profile.name}</p>
            <p className="profile-kana">{contents.profile.kana}</p>
          </div>
          <div className="social-link-wrapper">
            <SocialLink link="https://github.com/torabit">
              <FiGithub size="2rem" />
            </SocialLink>
            <div className="spacer" />
            <SocialLink link="https://soundcloud.com/sunsea34">
              <GrSoundcloud size="2rem" />
            </SocialLink>
            <div className="spacer" />
            <SocialLink link="https://twitter.com/tora_tora_bit">
              <BsTwitter size="2rem" />
            </SocialLink>
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile-header {
          position: absolute;
          height: 14rem;
          width: 100%;
          background-color: var(--color-grey-15);
        }
        .profile-contents {
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-top: 6.5rem;
          margin: 0 3rem;
        }
        .avatar-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: var(--border-radius-rounded);
          width: calc(var(--avatar-size-xlarge) + 1rem);
          height: calc(var(--avatar-size-xlarge) + 1rem);
          background-color: var(--color-avatar-wrapper);
          z-index: var(--z-index-default);
        }
        .profile-meta-data {
          text-align: center;
        }
        .profile-name {
          margin-bottom: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-weight: var(--font-weight-bold);
          font-size: var(--font-size-4);
        }
        .profile-kana {
          margin-bottom: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: var(--color-text-alt);
          font-size: var(--font-size-8);
        }
        .social-link-wrapper {
          display: flex;
          margin-top: 2rem;
        }
        .spacer {
          margin-left: 1.5rem;
        }

        @media screen and (min-width: 600px) {
          .profile-contents {
            margin: 0 8rem;
          }
          .profile-name {
            margin-bottom: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-weight: var(--font-weight-bold);
            font-size: var(--font-size-3);
          }
          .profile-kana {
            margin-bottom: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: var(--color-text-alt);
            font-size: var(--font-size-7);
          }
          .button-list {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};
