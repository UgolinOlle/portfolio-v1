import { BsGithub, BsLinkedin, BsMailbox, BsGit } from "react-icons/bs";
import { FaDocker } from "react-icons/fa";
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
import { VscTerminalBash } from "react-icons/vsc";

import { Link } from "@/components/ui/Link";
import { Section } from "@/components/ui/Section";
import { Transition } from "@/components/Transition";
import { Title } from "@/components/ui/Title";
import { CategorizedSkills } from "@/utils/interfaces/about";

export default function About() {
	const links = [
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

	const categorizedSkills: CategorizedSkills = {
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

	const feedbacks = [
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

	const sortedCategories = Object.keys(categorizedSkills).sort();

	const sortedSkills = sortedCategories.map((category) => ({
		category,
		skills: categorizedSkills[category],
	}));

	return (
		<>
			<Title title="About | Ugolin Ollé" />
			<Transition>
				<div className="flex flex-col gap-16 md:gap-24">
					<div>
						<h1 className="animate-in text-6xl md:text-8xl font-bold tracking-tight pb-6">
							About
						</h1>
						<Section heading="Bio" className="pt-8">
							<div className="flex flex-col lg:flex-row gap-3">
								<ul className="flex flex-col justify-between items-start space-y-5 lg:w-1/2">
									<li className="transition-opacity">
										<b>2002</b>・Born in Angers, France.
									</li>
									<li className="transition-opacity">
										<b>2019</b>・Starting learning
										development in autodidact.
									</li>
									<li className="transition-opacity">
										<b>2021 - Present</b>・Freelance
									</li>
									<li className="transition-opacity">
										<b>2022 - 2022</b>・1 Year at
										MyDigitalSchool.
									</li>
									<li className="transition-opacity">
										<b>2022</b>・Work at Nicoka (as
										Developer back in internership)
									</li>
									<li>
										<b>2022</b>・Work at Azerty Consulting
										(as Developer Full Stack)
									</li>
									<li className="transition-opacity">
										<b>2023 - Present</b>・Enter at 42
										School Bangkok.
									</li>
								</ul>
								<div className="flex flex-col gap-5 pt-8 lg:pt-0 lg:w-1/2">
									<h3 className="text-2xl md:text-1xl text-primary">
										Who i am
									</h3>
									<p className="text-justify">
										As a{" "}
										<b className="font-extrabold text-[#0171e2]">
											freelance full stack developer
										</b>{" "}
										and{" "}
										<b className="font-extrabold text-[#0171e2]">
											software engineering
										</b>{" "}
										at 42 Bangkok, I love the world of
										technology. My day-to-day is to create
										innovative IT solutions solutions and
										always striving to to improve.
									</p>
									<p className="text-justify">
										I&apos;m passionate about development,
										but also about travel and the different
										cultures of the world. Every line of
										code I write is about connecting people
										and their ideas. I also enjoy
										discovering new places to broaden my
										perspective.
									</p>
									<p className="text-justify">
										<b className="font-extrabold text-[#0171e2]">
											Jazz
										</b>{" "}
										is another of my passions. Its diversity
										and creativity inspire me in my personal
										life. There&apos;s a harmony between my
										passion for coding and my love of music
										music, which makes me a dedicated,
										inquisitive and a dedicated student,
										curious and in love with life.
									</p>
								</div>
							</div>
						</Section>
					</div>
					<div className="border border-t-[0.5px] border-secondary"></div>
					<Section heading="Socials">
						<ul className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-2 animated-list">
							{links.map((link) => (
								<li
									key={link.label}
									className="transition-opacity col-span-1"
								>
									<Link
										href={link.href}
										className="transition-opacity no-underline w-full rounded-full text-white p-4 flex items-center gap-3 bg-[#0171e2]"
									>
										{link.icon} {link.label}
									</Link>
								</li>
							))}
						</ul>
					</Section>
					<div className="border border-t-[0.5px] border-secondary"></div>
					<Section heading="Skills">
						<ul className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-2">
							{sortedSkills.map((categorySkills) => (
								<li
									key={categorySkills.category}
									className="col-span-1"
								>
									<h4 className="text-primary font-bold text-2xl pb-8 pt-8 md:pt-0">
										{categorySkills.category}
									</h4>
									<ul className="p-0 space-y-5 animated-list">
										{categorySkills.skills.map((skill) => (
											<li key={skill.label}>
												<p className="transition-opacity no-underline w-full rounded-full text-white p-4 flex items-center gap-3 bg-[#0171e2]">
													<span className="text-2xl">
														{skill.icon}
													</span>
													{skill.label}
												</p>
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</Section>
					<div className="border border-t-[0.5px] border-secondary"></div>
					<Section heading="Advice">
						<ul className="flex flex-col justify-between items-start space-y-5 lg:w-1/2">
							{feedbacks.map((feedback) => (
								<li key={feedback.label}>
									<h4 className="text-lg font-bold text-primary w-full">
										{feedback.label}・{feedback.author}
									</h4>
									<p className="rounded-full text-secondary">
										{feedback.content}
									</p>
								</li>
							))}
						</ul>
					</Section>
				</div>
			</Transition>
		</>
	);
}
