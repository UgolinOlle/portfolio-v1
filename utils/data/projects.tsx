import talent_flow from "@/public/projects/talent_flow/logo-color.svg";
import fr_printf from "@/public/projects/ft_printfn.png";
import get_next_line from "@/public/projects/get_next_linee.png";
import libft from "@/public/projects/libftn.png";
import pipex from "@/public/projects/pipexn.png";

export const projects = [
	{
		label: "TalentFlow",
		description:
			"TalentFlow is a complete human resources management solution that simplifies the management of employees, positions, absences, recruitment, performance, payroll, training, schedules, data security, reporting, integrations, all with a user-friendly interface, accessibility for all employees and customization tailored to each company's needs.",
		date: "2023",
		href: "https://github.com/UgolinOlle/talen-flow",
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
			"An essential function for file manipulation in C, get_next_line allows you to read a file line by line efficiently, simplifying the processing of textual data.",
		date: "2023",
		href: "/projects/get_next_line",
		img: get_next_line,
		tags: ["Finish", "Makefile", "C"],
	},
	{
		label: "ft_printf",
		description:
			"42 School indispensable ft_printf offers powerful formatting capability for data display, enabling precise output management, an essential tool for C programming projects.",
		date: "2023",
		href: "https://github.com/UgolinOlle/ft_printf",
		img: fr_printf,
		tags: ["Finish", "Makefile", "C"],
	},
	{
		label: "pipex",
		description:
			"Pipex, a versatile flow redirection solution, enables École 42 students to manipulate file I/O with precision, playing a key role in building Unix command pipelines.",
		date: "2023",
		href: "https://github.com/UgolinOlle/pipex",
		img: pipex,
		tags: ["In progress", "Makefile", "C"],
	},
	{
		label: "libft",
		description:
			"Libft, a fundamental C library from École 42, provides a diverse collection of standard and custom functions. It provides students with a solid foundation for C development, facilitating the creation of more complex projects with features such as string handling, linked lists, and much more.",
		date: "2023",
		href: "https://github.com/UgolinOlle/libft",
		img: libft,
		tags: ["Finish", "Makefile", "C"],
	},
];
