import Image from "next/image";

import avatar from "@/public/profile-pic.png";
import { Title } from "@/components/ui/Title";
import { Transition } from "@/components/Transition";
import { Highlight } from "@/components/ui/Highlight";

export default function Index() {
    return (
        <>
            <Title title="Ugolin Ollé | Home" />
            <Transition>
                <div className="flex flex-col gap-16 md:gap-8">
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
                            <Highlight>Full Stack Developer</Highlight> and a{" "}
                            <Highlight>Cadet at 42 Bangkok</Highlight>.
                        </p>
                    </div>
                    <div className="border border-t-[1px] text-secondary w-full my-10"></div>
                    {/* Banner */}
                    <div className="flex w-full px-8 py-10">
                        <ul className="flex justify-between items-center gap-5">
                            <li className="transition-opacity">0</li>
                            <li className="transition-opacity">0</li>
                            <li className="transition-opacity">0</li>
                        </ul>
                    </div>
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
            </Transition>
        </>
    );
}
