import type { SkillConstant } from "@/types/skills.type";
import HtmlIcon from "public/svgs/html.svg";
import CSSIcon from "public/svgs/css.svg";
import JavaScriptIcon from "public/svgs/javascript.svg";
import TypeScriptIcon from "public/svgs/typescript.svg";
import ReactIcon from "public/svgs/react.svg";
import NextIcon from "public/svgs/next.svg";
import NodeIcon from "public/svgs/nodejs.svg";
import NestIcon from "public/svgs/nest.svg";
import PirsmaIcon from "public/svgs/prisma.svg";
import PostgreSQLIcon from "public/svgs/postgresql.svg";
import GraphQLIcon from "public/svgs/graphql.svg";
import GrpcIcon from "public/svgs/grpc.svg";
import StorybookIcon from "public/svgs/storybook.svg";
import JestIcon from "public/svgs/jest.svg";
import DockerIcon from "public/svgs/docker.svg";
import GoIcon from 'public/svgs/go.svg';
import RustIcon from "public/svgs/rust.svg";

export class SkillsUtil {
  private readonly frontEnd: SkillConstant[] = [
    {
      name: "HTML",
      icon: HtmlIcon,
      url: "https://developer.mozilla.org/ja/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: CSSIcon,
      url: "https://developer.mozilla.org/ja/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: JavaScriptIcon,
      url: "https://developer.mozilla.org/ja/docs/Learn/JavaScript",
    },
    {
      name: "TypeScript",
      icon: TypeScriptIcon,
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "React",
      icon: ReactIcon,
      url: "https://ja.reactjs.org/",
    },
    {
      name: "Next.js",
      icon: NextIcon,
      url: "https://nextjs.org/",
    },
  ];

  private readonly backEnd: SkillConstant[] = [
    {
      name: "TypeScript",
      icon: TypeScriptIcon,
      url: "https://www.typescriptlang.org/",
    },
    {
      name:"Rust",
      icon: RustIcon,
      url: "https://www.rust-lang.org/",
    },
    {
      name: "Go",
      icon: GoIcon,
      url: "https://go.dev/",
    },
    {
      name: "Node.js",
      icon: NodeIcon,
      url: "https://nodejs.org/ja/",
    },
    {
      name: "NestJS",
      icon: NestIcon,
      url: "https://nestjs.com/",
    },
  ];

  private readonly database: SkillConstant[] = [
    {
      name: "Prisma",
      icon: PirsmaIcon,
      url: "https://www.prisma.io/",
    },
    {
      name: "PostgreSQL",
      icon: PostgreSQLIcon,
      url: "https://www.postgresql.org/",
    },
  ];

  private readonly other: SkillConstant[] = [
    {
      name: "gRPC",
      icon: GrpcIcon,
      url: "https://grpc.io/",
    },
    {
      name: "GraphQL",
      icon: GraphQLIcon,
      url: "https://graphql.org/",
    },
    {
      name: "Storybook",
      icon: StorybookIcon,
      url: "https://storybook.js.org/",
    },
    {
      name: "Jest",
      icon: JestIcon,
      url: "https://jestjs.io/ja/",
    },
    {
      name: "Docker",
      icon: DockerIcon,
      url: "https://www.docker.com/",
    },
  ];

  public getFrontEnd() {
    return this.frontEnd;
  }

  public getBackend() {
    return this.backEnd;
  }

  public getDatabase() {
    return this.database;
  }

  public getOther() {
    return this.other;
  }
}
