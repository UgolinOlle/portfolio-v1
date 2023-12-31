import {
    BsGithub,
    BsLinkedin,
    BsMailbox,
    BsGit,
    BsInstagram,
} from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import {
    BiLogoFlutter,
    BiLogoJava,
    BiLogoMongodb,
    BiLogoNodejs,
    BiLogoPostgresql,
    BiLogoPython,
    BiLogoReact,
    BiLogoTailwindCss,
    BiLogoTypescript,
    BiLogoWordpress,
} from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";

import { CategorizedSkills } from "@/utils/interfaces/about";
import { Docker } from "@/components/skills/Docker";
import { Bash } from "@/components/skills/Bash";
import { Git } from "@/components/skills/Git";
import { Node } from "@/components/skills/Node";
import { Java } from "@/components/skills/Java";
import { Python } from "@/components/skills/Python";

export const links = [
    {
        label: "Github",
        icon: <BsGithub />,
        href: "https://github.com/UgolinOlle",
    },
    {
        label: "LinkedIn",
        icon: <BsLinkedin />,
        href: "https://linkedin.com/in/ugolin-olle",
    },
    {
        label: "Email",
        icon: <BsMailbox />,
        href: "mailto:contact@ugolin-olle.com",
    },
    {
        label: "Instagram",
        icon: <BsInstagram />,
        href: "https://www.instagram.com/ugolin_os/",
    },
];

export const categorizedSkills: CategorizedSkills = {
    DevOps: [
        {
            label: "Docker",
            icon: <FaDocker />,
            description: <Docker />,
        },
        {
            label: "Bash",
            icon: <VscTerminalBash />,
            description: <Bash />,
        },
        {
            label: "Git",
            icon: <BsGit />,
            description: <Git />,
        },
    ],
    Backend: [
        {
            label: "NodeJS",
            icon: <BiLogoNodejs />,
            description: <Node />,
        },
        {
            label: "Java",
            icon: <BiLogoJava />,
            description: <Java />,
        },
        {
            label: "Python",
            icon: <BiLogoPython />,
            description: <Python />,
        },
    ],
    Frontend: [
        { label: "React", icon: <BiLogoReact /> },
        { label: "Typescript", icon: <BiLogoTypescript /> },
        { label: "NextJS", icon: <TbBrandNextjs /> },
        { label: "TailwindCSS", icon: <BiLogoTailwindCss /> },
        { label: "Flutter", icon: <BiLogoFlutter /> },
        { label: "Wordpress", icon: <BiLogoWordpress /> },
    ],
    Databases: [
        { label: "PostgreSQL", icon: <BiLogoPostgresql /> },
        { label: "MongoDB", icon: <BiLogoMongodb /> },
    ],
};

export const feedbacks = [
    {
        label: "We Are Pirates",
        content:
            "Great exchange with Ugolin, he is responsive, attentive and above all very professional!",
        author: "Thomas Amusan",
    },
    {
        label: "Boookable",
        content: `Ugolin helped me prepare a project to create a mobile application. Ugolin listened carefully to understand my project and my wishes in terms of product functionality. He didn't try to "impose" his ideas; on the contrary, he made several proposals. These were clear and pragmatic, and perfectly suited to my needs. What's more, I particularly enjoyed my discussions with Ugolin, who, over and above his technical expertise, is a very friendly person. I can't recommend Ugolin enough!`,
        author: "Abdessalem Abaidi",
    },
];
