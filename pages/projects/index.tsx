import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

import { Section } from "@/components/ui/Section";
import { Title } from "@/components/ui/Title";
import { Link } from "@/components/ui/Link";
import talent_flow from "@/public/projects/talent_flow/logo-color.svg";
import school_logo from "@/public/42 Logo.svg";

export default function Projects() {
	const projects = [
		{
			label: "TalentFlow",
			description:
				"TalentFlow est une solution complète de gestion des ressources humaines qui simplifie la gestion des employés, des postes, des absences, du recrutement, des performances, de la paie, de la formation, des horaires, de la sécurité des données, des rapports, des intégrations, le tout avec une interface conviviale, une accessibilité pour tous les employés et une personnalisation adaptée aux besoins de chaque entreprise.",
			date: "2023",
			href: "https://github.com/UgolinOlle/talenflow",
			img: talent_flow,
			tags: [
				"In progress",
				"NestJS",
				"NextJS",
				"Typescript",
				"Grafana",
				"Docker",
				"Elastic Search",
			],
		},
		{
			label: "get_next_line",
			description:
				"Une fonction essentielle pour la manipulation de fichiers en C, get_next_line permet de lire un fichier ligne par ligne de manière efficace, simplifiant ainsi le traitement de données textuelles.",
			date: "2023",
			href: "https://github.com/UgolinOlle/get_next_line",
			img: school_logo,
			tags: ["Finish", "Makefile", "C"],
		},
		{
			label: "ft_printf",
			description:
				"L'indispensable ft_printf de l'École 42 offre une puissante capacité de formatage pour l'affichage de données, permettant une gestion précise de l'output, un outil essentiel pour les projets de programmation en C.",
			date: "2023",
			href: "https://github.com/UgolinOlle/ft_printf",
			img: school_logo,
			tags: ["Finish", "Makefile", "C"],
		},
		{
			label: "pipex",
			description:
				"Pipex, une solution polyvalente de redirection de flux, permet aux étudiants d'École 42 de manipuler les entrées/sorties de fichiers avec précision, jouant un rôle clé dans la construction de pipelines de commandes Unix.",
			date: "2023",
			href: "https://github.com/UgolinOlle/pipex",
			img: school_logo,
			tags: ["In progress", "Makefile", "C"],
		},
		{
			label: "libft",
			description:
				"Libft, une bibliothèque C fondamentale d'École 42, fournit une collection variée de fonctions standard et personnalisées. Elle offre aux étudiants une base solide pour le développement en C, facilitant la création de projets plus complexes grâce à des fonctionnalités telles que la gestion des chaînes de caractères, des listes chaînées, et bien plus encore.",
			date: "2023",
			href: "https://github.com/UgolinOlle/libft",
			img: school_logo,
			tags: ["Finish", "Makefile", "C"],
		},
	];

	return (
		<>
			<Title title="Project | Ugolin Ollé" />
			<div className="flex flex-col gap-16 md:gap-24">
				<div>
					<h1 className="animate-in text-6xl md:text-8xl font-bold tracking-tight pb-10">
						Some projects
					</h1>
					<ul className="animated-list flex flex-col justify-between items-start space-y-5">
						{projects.map((project) => (
							<li
								key={project.label}
								className="flex flex-col md:flex-row transition-opacity gap-3 py-10 border-b-primary border-b-[1px]"
							>
								<div className="md:w-1/2 h-[400px] md:h-1/2 px-5">
									<Image
										src={project.img}
										alt={project.label}
										className="w-full h-full"
									/>
								</div>
								<div className="w-full flex flex-col text-primary no-animated-list ">
									<div className="flex justify-between items-center">
										<h4 className="text-[1.3rem] font-medium">
											{project.date}・{project.label}
										</h4>
										<Link
											href={project.href}
											className="bg-[#0171e2] text-sm text-white rounded-full px-4 py-3 flex justify-between items-center"
										>
											{project.label}
											<BsArrowUpRight className="ml-2 font-bold" />
										</Link>
									</div>
									<p className="text-secondary pt-5 md:w-2/3 text-justify">
										{project.description}
									</p>
									<ul className="flex flex-row flex-wrap justify-start items-center pt-5 md:w-2/3">
										{project.tags.map((tag) => (
											<li
												key={tag}
												className={`${
													tag === "In progress"
														? "bg-red-500"
														: tag === "Finish"
														? "bg-green-600"
														: "bg-[#0171e2]"
												} text-sm text-white rounded-full px-4 py-3 mb-2 mr-2 inline-block`}
											>
												{tag}
											</li>
										))}
									</ul>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
