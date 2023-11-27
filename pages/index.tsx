import useSWR from "swr";
import Image from "next/image";

import avatar from "@/public/profile-pic.png";
import fetcher from "@/utils/api";
import { Title } from "@/components/ui/Title";
import { Transition } from "@/components/Transition";
import { Link } from "@/components/ui/Link";

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
                            <div className="flex gap-8 items-center">
                                <h1 className="animate-in text-6xl md:text-8xl tracking-tight pb-6">
                                    Ugolin Ollé
                                </h1>
                                <Image
                                    src={avatar}
                                    alt="Profile picture"
                                    className="object-center w-[100px] h-[100px]"
                                />
                            </div>
                            <p
                                className="text-2xl md:text-4xl text-primary animate-in font-[400]"
                                style={{ "--index": 1 } as React.CSSProperties}
                            >
                                I&apos;m a{" "}
                                <Link href="/about">
                                    <span className="text-blue font-bold">
                                        Full Stack Developer
                                    </span>
                                </Link>
                                , in{" "}
                                <Link href="/about">
                                    <span className="text-blue font-bold">
                                        Freelance
                                    </span>
                                </Link>{" "}
                                and a{" "}
                                <Link href="/about">
                                    <span className="text-blue font-bold">
                                        Cadet at 42 Bangkok
                                    </span>
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="border border-t-[1px] text-secondary w-full my-10"></div>
                        <div
                            className="animate-in flex flex-col md:flex-row gap-6 text-secondary"
                            style={{ "--index": 1 } as React.CSSProperties}
                        >
                            <div className="flex flex-col gap-5 w-full md:w-1/2">
                                <h4 className="text-primary text-2xl md:text-3xl font-medium text-center">
                                    A little bit of jazz to make your day
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
