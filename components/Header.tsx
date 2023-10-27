import clsx from "clsx";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { BsGithub, BsStars } from "react-icons/bs";
import { Fragment } from "react";

import { NavigationLink } from "./NavigationLink";
import { Link } from "./ui/Link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { BiMailSend } from "react-icons/bi";

export function Header() {
	const router = useRouter();
	const pathName = `/${router.pathname.split("/")[1]}`;
	const links = [
		{ name: "About", red: "/about" },
		{ name: "Projects", red: "/projects" },
		{ name: "Gears", red: "/gears" },
		{
			name: "Source code",
			icon: <BsGithub />,
			red: "https://github.com/UgolinOlle/portfolio-v1",
		},
	];

	return (
		<header className="relative md:sticky top-0 main-header bg-primary z-50">
			<nav className="px-4 md:px-6 py-3 lg max-w-[1050px] mx-auto flex justify-between items-center gap-4 bg-primary">
				<Link href="/">
					<h3 className="text-3xl font-extrabold">UO</h3>
				</Link>
				<ul className="hidden md:flex items-center gap-2">
					{links.map((link) => (
						<li key={link.red}>
							<NavigationLink href={link.red}>
								{link.icon ? link.icon : undefined} {link.name}
							</NavigationLink>
						</li>
					))}
				</ul>
				<Popover className="relative ml-auto md:hidden">
					<Popover.Button className="flex items-center gap-2 text-primary p-1 rounded-lg focus-visible:outline-none focus:ring-0">
						Menu
						<BsStars />
					</Popover.Button>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel className="absolute z-10 right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg w-40 rounded-xl bg-blur backdrop-blur-lg focus:outline-none sm:text-sm">
							<div className="grid">
								{links.map((link) => (
									<Link
										key={link.red}
										href={link.red}
										className={clsx(
											"px-4 py-2 rounded-md hover:text-primary transition-colors",
											pathName === link.red
												? "bg-secondaryA font-medium"
												: "font-normal",
											link.name === "Source"
												? "bg-[#0171e2] rounded-full text-white"
												: undefined,
										)}
									>
										{link.name}
									</Link>
								))}
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>

				<div className="flex items-center justify-center w-22 h-8 gap-5">
					<div className="transition-opacity bg-blue rounded-full py-2 px-4 text-white">
						<Link
							className="flex gap-3 items-center no-underline"
							href={"mailto:hello@ugolin-olle.com"}
						>
							<BiMailSend className="text-xl" />
							Contact
						</Link>
					</div>
					<ThemeSwitcher />
				</div>
			</nav>
		</header>
	);
}
