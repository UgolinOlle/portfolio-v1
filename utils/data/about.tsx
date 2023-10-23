import { BsGithub, BsLinkedin, BsMailbox, BsGit } from "react-icons/bs";
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
import { ES, FR, GB } from "country-flag-icons/react/3x2";

import { CategorizedSkills } from "@/utils/interfaces/about";

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
];

export const categorizedSkills: CategorizedSkills = {
	DevOps: [
		{ label: "Docker", icon: <FaDocker /> },
		// { label: 'Grafana', icon: <SiGrafana /> },
		{ label: "Bash", icon: <VscTerminalBash /> },
		{ label: "Git", icon: <BsGit /> },
	],
	Backend: [
		{ label: "NodeJS", icon: <BiLogoNodejs /> },
		{ label: "Java", icon: <BiLogoJava /> },
		// { label: 'NestJS', icon: <SiNestjs /> },
		{ label: "Python", icon: <BiLogoPython /> },
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

export const languages = [
	{
		label: "French",
		level: "Fluent",
		icon: <FR />,
	},
	{
		label: "English",
		level: "Work fluent",
		icon: <GB />,
	},
	{
		label: "Spanish",
		level: "Basic discussion",
		icon: <ES />,
	},
];
