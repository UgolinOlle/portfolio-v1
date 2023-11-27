import Popup from "reactjs-popup";
import { BsArrowUpRight } from "react-icons/bs";

import { Link } from "@/components/ui/Link";
import { Section } from "@/components/ui/Section";
import { Transition } from "@/components/Transition";
import { Title } from "@/components/ui/Title";
import { categorizedSkills, links, feedbacks } from "@/utils/data/about";

export default function About() {
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
                                <ul className="flex flex-col-reverse justify-between items-start gap-5 lg:w-1/2">
                                    <li className="transition-opacity">
                                        <b>2002</b>・Born in Angers, France.
                                    </li>
                                    <li className="transition-opacity">
                                        <b>2018</b>・Starting learning
                                        development in self-taught.
                                    </li>
                                    <li className="transition-opacity">
                                        <b>2021 - Present</b>・Full Stack
                                        Developer in Freelance
                                    </li>
                                    <li className="transition-opacity">
                                        <b>2022</b>・Work at Nicoka (as Back-end
                                        Developer in internship)
                                    </li>
                                    <li>
                                        <b>2022</b>・Work at Azerty Consulting
                                        (as Full Stack Developer)
                                    </li>
                                    <li className="transition-opacity">
                                        <b>2023 - Present</b>・Parallel study at
                                        42 School Bangkok.{" "}
                                        <span className="text-tertiary">
                                            Let&apos;s go to Ernestine ?
                                        </span>
                                    </li>
                                </ul>
                                <div className="flex flex-col gap-5 pt-8 lg:pt-0 lg:w-1/2">
                                    <h3 className="text-2xl md:text-1xl text-primary">
                                        Who i am
                                    </h3>
                                    <p className="text-justify">
                                        As a{" "}
                                        <b className="font-extrabold text-[#0171e2]">
                                            Full Stack Developer in Freelance
                                        </b>{" "}
                                        and learning{" "}
                                        <b className="font-extrabold text-[#0171e2]">
                                            Computer Science
                                        </b>{" "}
                                        at 42 Bangkok. My day-to-day goals is to
                                        create IT solutions and always striving
                                        to improve.
                                    </p>
                                    <p className="text-justify">
                                        I&apos;m passionate about software
                                        development, but also about travel and
                                        meeting different cultures of the world.{" "}
                                    </p>
                                    <p className="text-justify">
                                        I&apos;m also passionate about{" "}
                                        <b className="font-extrabold text-[#0171e2]">
                                            Jazz
                                        </b>{" "}
                                        music. Its diversity and creativity
                                        inspire me in my personal life.
                                        There&apos;s an harmony between my
                                        passion for coding and my love of music.
                                    </p>
                                </div>
                            </div>
                        </Section>
                    </div>
                    <Section heading="Skills">
                        <ul className="flex-grow grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {sortedSkills.map((categorySkills) => (
                                <li
                                    key={categorySkills.category}
                                    className="col-span-1"
                                >
                                    <h4 className="text-primary font-bold text-2xl pb-8 pt-8 md:pt-0">
                                        {categorySkills.category}
                                    </h4>
                                    <ul className="space-y-8 animated-list">
                                        {categorySkills.skills.map((skill) => (
                                            <li
                                                key={skill.label}
                                                className="cursor-pointer"
                                            >
                                                <Popup
                                                    trigger={
                                                        <div className="transition-opacity no-underline w-full rounded-full text-white p-4 flex justify-between items-center gap-3 bg-[#0171e2]">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-2xl">
                                                                    {skill.icon}
                                                                </span>
                                                                <p>
                                                                    {
                                                                        skill.label
                                                                    }
                                                                </p>
                                                            </div>
                                                            <BsArrowUpRight className="font-bold text-lg" />
                                                        </div>
                                                    }
                                                    contentStyle={{
                                                        width: "80vw",
                                                        margin: "5rem auto 5rem auto",
                                                        borderRadius: "16px",
                                                        boxShadow:
                                                            "0 4px 30px rgba(0, 0, 0, 0.1)",
                                                        backdropFilter:
                                                            "blur(20px)",
                                                        WebkitBackdropFilter:
                                                            "blur(20px)",
                                                    }}
                                                    modal
                                                    nested
                                                >
                                                    {skill.description}
                                                </Popup>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </Section>
                    <Section heading="Socials">
                        <ul className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-5 animated-list">
                            {links.map((link) => (
                                <li
                                    key={link.label}
                                    className="transition-opacity col-span-1 w-full"
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
                    <Section heading="Credentials">
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
