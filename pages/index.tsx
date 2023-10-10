import useSWR from "swr";
import { BsGithub, BsFillPersonFill } from "react-icons/bs";
import { BiGitCommit, BiMailSend } from "react-icons/bi";
import { RiGitRepositoryFill } from "react-icons/ri";

import fetcher from "@/utils/api";
import { Link } from "@/components/ui/Link";
import { Title } from "@/components/ui/Title";
import { Button } from "@/components/ui/Button";

export default function Index() {
	const { data: githubData, error: githubError } = useSWR(
		"/api/github",
		fetcher,
	);

	return (
		<>
			<Title title="Ugolin Ollé | Home" />
			<div className="flex flex-col gap-16 md:gap-24">
				<div className="flex flex-col gap-8 animate-in">
					<div>
						<h1 className="animate-in text-6xl md:text-8xl font-bold tracking-tight pb-6">
							Ugolin Ollé
						</h1>
						<p
							className="text-2xl md:text-4xl text-secondary animate-in"
							style={{ "--index": 1 } as React.CSSProperties}
						>
							I&apos;m a software Engineer, a freelance and a
							student at 42 Bangkok.
						</p>
					</div>
					<div
						className="animate-in flex flex-col md:flex-row gap-6 text-secondary md:items-center"
						style={{ "--index": 1 } as React.CSSProperties}
					>
						<ul className="flex md:flex-row flex-col justify-between items-start md:items-center space-y-5 md:space-y-0 md:space-x-5 animated-list">
							<li className="transition-opacity bg-[#0171e2] rounded-full py-3 px-4 text-white">
								<Link
									className="flex gap-3 items-center no-underline"
									href={"https://github.com/UgolinOlle"}
								>
									<RiGitRepositoryFill className="text-xl" />
									{githubData?.repos} Public repositories
								</Link>
							</li>
							<li className="transition-opacity bg-[#0171e2] rounded-full py-3 px-4 text-white">
								<Link
									className="flex gap-3 items-center no-underline"
									href={"https://github.com/UgolinOlle"}
								>
									<BsFillPersonFill className="text-xl" />
									{githubData?.followers} Followers
								</Link>
							</li>
							<li className="transition-opacity bg-[#0171e2] rounded-full py-3 px-4 text-white">
								<Link
									className="flex gap-3 items-center no-underline"
									href={"mailto:hello@ugolin-olle.com"}
								>
									<BiMailSend className="text-xl" />
									Get in touch
								</Link>
							</li>
						</ul>
					</div>
					<div className="border border-t-[1px] text-secondary w-full"></div>
					<div
						className="animate-in flex flex-col md:flex-row gap-6 text-secondary"
						style={{ "--index": 1 } as React.CSSProperties}
					>
						<div className="flex flex-col gap-5 w-1/2">
							<h4 className="text-primary text-2xl md:text-3xl font-medium">
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
						<div className="flex flex-col gap-5 w-1/2">
							<h4 className="text-primary text-2xl md:text-3xl font-medium">
								Why not a little story before start my portfolio
								?
							</h4>
							<p className="text-secondary">
								Once upon a time, in the bustling streets of New
								Orleans in the early 20th century, there was a
								group of passionate musicians. They would gather
								in smoky, dimly lit clubs, their instruments
								bathed in the soft glow of oil lamps. These
								artists had a unique language, a language known
								as jazz. They blended African rhythms, European
								melodies, and deep emotions to create music that
								stirred the soul.
							</p>
							<p className="text-secondary">
								Their daring improvisations were like musical
								conversations, where each instrument had its
								voice. Jazz grew, spread across the world, and
								evolved over the decades. It inspired
								generations of artists and bore witness to the
								tumultuous history of the 20th century.
							</p>
							<p className="text-secondary">
								Even today, it continues to resonate in hearts
								and minds, reminding us all that music can be an
								endless source of creativity and expression.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
