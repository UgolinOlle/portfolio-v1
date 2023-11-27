import Image from "next/image";

import { Section } from "@/components/ui/Section";
import { Title } from "@/components/ui/Title";
import mac from "@/public/tech/mac.jpg";
import mouse from "@/public/tech/mouse.webp";
import keyboard from "@/public/tech/keyboard.webp";
import bag from "@/public/tech/bag.webp";
import notion from "@/public/tech/notion_logo.png";
import todoist from "@/public/tech/todoist.png";
import slack from "@/public/tech/slack.png";
import discord from "@/public/tech/discord.jpeg";
import iterm from "@/public/tech/iterm.png";
import intellij from "@/public/tech/intellij.png";
import vscode from "@/public/tech/vscode.jpeg";
import insomnia from "@/public/tech/insomnia.png";
import tableplus from "@/public/tech/tableplus.webp";
import docker from "@/public/tech/Docker logo.svg";
import { Transition } from "@/components/Transition";

export default function Tech() {
	const techs = [
		{
			label: "Macbook air 2021",
			img: mac,
			alt: `Photo by Unsplash</a>`,
			linlk: "",
		},
		{
			label: "Mouse M330 Logitech",
			img: mouse,
			alt: "Mouse M330 Logitech",
			link: "",
		},
		{
			label: "Keychron K2 Mechanical Keyboard",
			img: keyboard,
			alt: "Keychron K2 Mechanical Keyboard",
			link: "",
		},
		{
			label: "The North Face Bag",
			img: bag,
			alt: "The North Face Bag",
			link: "",
		},
	];

	const softwares = [
		{
			label: "Notion",
			category: "Productivity",
			img: notion,
			alt: "Notion logo",
		},
		{
			label: "Todoist",
			category: "Productivity",
			img: todoist,
			alt: "Todoist logo",
		},
		{
			label: "Slack",
			category: "Productivity",
			img: slack,
			alt: "Slack logo",
		},
		{
			label: "Discord",
			category: "Productivity",
			img: discord,
			alt: "Discord logo",
		},
		{
			label: "Iterm",
			category: "Development",
			img: iterm,
			alt: "Iterm logo",
		},
		{
			label: "Intellij",
			category: "Development",
			img: intellij,
			alt: "Intellij logo",
		},
		{
			label: "VSCode",
			category: "Development",
			img: vscode,
			alt: "VSCode logo",
		},
		{
			label: "Insomnia",
			category: "Development",
			img: insomnia,
			alt: "Insomnia logo",
		},
		{
			label: "TablePlus",
			category: "Development",
			img: tableplus,
			alt: "TablePlus logo",
		},
		{
			label: "Docker Desktop",
			category: "Development",
			img: docker,
			alt: "Docker Desktop logo",
		},
	];

	return (
		<>
			<Title title="Tech | Ugolin Ollé" />
			<Transition>
				<div className="flex flex-col gap-16 md:gap-24">
					<h1 className="animate-in text-6xl md:text-8xl font-bold tracking-tight pb-6">
						Gears
					</h1>
					<Section heading="Gear">
						<ul className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-5 animated-list">
							{techs.map((tech) => (
								<li
									key={tech.label}
									className="flex gap-4 items-center transition-opacity"
								>
									<div className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[12rem] min-w-[12rem] h-[12rem] shadow">
										<Image
											src={tech.img}
											alt={tech.label}
											className="object-center object-cover w-full h-full"
											fill
										/>
									</div>
									<div className="w-full flex flex-col text-primary">
										<h4 className="text-[1.3rem] font-medium">
											{tech.label}
										</h4>
									</div>
								</li>
							))}
						</ul>
					</Section>
					<div className="border border-t-[1px] text-secondary w-full"></div>
					<Section heading="Software">
						<ul className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-5 animated-list">
							{softwares.map((software) => (
								<li
									key={software.label}
									className="flex gap-4 items-center transition-opacity"
								>
									<div className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[3rem] min-w-[3rem] h-[3rem] shadow">
										<Image
											src={software.img}
											alt={software.label}
											className="object-center object-cover w-full h-full"
											fill
										/>
									</div>
									<div className="w-full flex flex-col text-primary">
										<h4 className="text-[1.3rem] font-medium">
											{software.label}
										</h4>
									</div>
								</li>
							))}
						</ul>
					</Section>
				</div>
			</Transition>
		</>
	);
}
