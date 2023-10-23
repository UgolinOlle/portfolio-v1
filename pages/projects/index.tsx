import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

import { Section } from "@/components/ui/Section";
import { Title } from "@/components/ui/Title";
import { Link } from "@/components/ui/Link";
import { Transition } from "@/components/Transition";
import { projects } from "@/utils/data/projects";

export default function Projects() {
	return (
		<>
			<Title title="Project | Ugolin Ollé" />
			<Transition>
				<div className="flex flex-col gap-16 md:gap-24">
					<div>
						<h1 className="animate-in text-6xl md:text-8xl font-bold tracking-tight pb-10">
							Some projects
						</h1>
						<ul className="animated-list flex flex-col justify-between items-start space-y-5">
							{projects.map((project) => (
								<li
									key={project.label}
									className="flex flex-col md:flex-row transition-opacity gap-3 py-10 border-b-secondary border-b-[1px]"
								>
									<div className="md:w-1/2 h-[400px] md:h-1/2 px-5 m-auto">
										<Image
											src={project.img}
											alt={project.label}
											className="w-2/3 h-2/3"
										/>
									</div>
									<div className="w-full flex flex-col text-primary no-animated-list ">
										<div className="flex justify-between items-center">
											<h4 className="text-[1.3rem] font-medium">
												{project.date}・{project.label}
											</h4>
											<Link
												href={project.href}
												className="bg-blue text-sm text-white rounded-full px-4 py-3 flex justify-between items-center"
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
															? "bg-red"
															: tag === "Finish"
															? "bg-green"
															: "bg-blue"
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
			</Transition>
		</>
	);
}
