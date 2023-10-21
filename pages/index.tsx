import useSWR from "swr";
import Image from "next/image";
import { BsGithub, BsFillPersonFill } from "react-icons/bs";
import { BiBook, BiGitCommit, BiMailSend } from "react-icons/bi";
import { RiGitRepositoryFill } from "react-icons/ri";

import fetcher from "@/utils/api";
import { Link } from "@/components/ui/Link";
import { Title } from "@/components/ui/Title";
import { Transition } from "@/components/Transition";
import avatar from "@/public/profile-pic.png";

export default function Index() {
	const { data: githubData, error: githubError } = useSWR(
		"/api/github",
		fetcher,
	);

	return (
		<>
			<Title title="Ugolin Ollé | Home" />
			<Transition>
				<div className="flex flex-col gap-16 md:gap-24">
					<div className="flex flex-col gap-8 animate-in">
						<div>
							<h1 className="animate-in text-6xl md:text-8xl font-bold tracking-tight pb-6">
								Ugolin Ollé
							</h1>
							<p
								className="text-2xl md:text-4xl text-primary animate-in"
								style={{ "--index": 1 } as React.CSSProperties}
							>
								I&apos;m a{" "}
								<span className="text-blue">
									Software Engineer
								</span>
								, a <span className="text-blue">Freelance</span>{" "}
								and a{" "}
								<span className="text-blue">
									Student at 42 Bangkok
								</span>
								.
							</p>
						</div>
						<div
							className="animate-in flex flex-col md:flex-row gap-6 text-white md:items-center"
							style={{ "--index": 1 } as React.CSSProperties}
						>
							<ul className="flex md:flex-row flex-col justify-between items-start md:items-center space-y-5 md:space-y-0 md:space-x-5 animated-list">
								<li className="transition-opacity bg-blue rounded-full py-3 px-4 text-white">
									<Link
										className="flex gap-3 items-center no-underline"
										href={"mailto:hello@ugolin-olle.com"}
									>
										<BiMailSend className="text-xl" />
										Get in touch
									</Link>
								</li>
								<li className="transition-opacity bg-blue rounded-full py-3 px-4 text-white">
									<Link
										className="flex gap-3 items-center no-underline"
										href={"https://blog.ugolin-olle.com"}
									>
										<BiBook className="text-xl" />
										Blog
									</Link>
								</li>
							</ul>
						</div>
						<div className="border border-t-[1px] text-secondary w-full"></div>
						<div
							className="animate-in flex flex-col md:flex-row gap-6 text-secondary"
							style={{ "--index": 1 } as React.CSSProperties}
						>
							<div className="flex flex-col md:items-start items-center gap-5 w-full md:w-1/2">
								<h4 className="text-primary text-2xl md:text-3xl font-medium">
									👋🏻 Hi, this is my face!
								</h4>
								<Image
									src={avatar}
									alt="Profile picture"
									className="object-center w-[200px] h-[200px] md:w-[400px] md:h-[400px] mt-8"
								/>
							</div>
							<div className="flex flex-col gap-5 w-full md:w-1/2">
								<h4 className="text-primary text-2xl md:text-3xl font-medium text-center">
									A little bit of jazz to make you&apos;re day
								</h4>
								<iframe
									allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
									height="450"
									style={
										{
											width: "100%",
											maxWidth: "660px",
											overflow: "hidden",
											borderRadius: "10px",
										} as React.CSSProperties
									}
									sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
									src="https://embed.music.apple.com/fr/playlist/jazz-vibes/pl.u-WabZv4jUeNLbEzg?l=en-GB"
								/>
							</div>
						</div>
					</div>
				</div>
			</Transition>
		</>
	);
}
