import { FaPython } from "react-icons/fa";

export function Python() {
    return (
        <div className="h-full flex flex-col items-center gap-7 text-white p-4">
            <div className="flex justify-center items-center w-full gap-3 text-2xl md:text-5xl py-8">
                <FaPython />
                <h3 className="font-bold">Python</h3>
            </div>
            <div className="flex flex-col gap-8 h-auto w-full border-t pt-10 pb-5">
                <div className="flex flex-col gap-3">
                    <h4 className="md:text-xl font-medium">💬・Proficient: </h4>
                    <p>
                        Whether it was crafting intricate algorithms, wrangling
                        data, or spinning up quick web apps, Python became my
                        trusted ally.
                    </p>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 gap-8">
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            💻・Harnessing Python’s Libraries:
                        </h4>
                        <p className="">
                            Python&apos;s rich ecosystem offers a myriad of
                            libraries and frameworks, and understanding their
                            strengths has been key to my development journey.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            🚀・Data Processing:
                        </h4>
                        <p>
                            Utilizing libraries like Pandas and NumPy, I&apos;ve
                            been able to handle large datasets efficiently,
                            perform complex operations, and extract actionable
                            insights.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            🎨・Data Visualization:
                        </h4>
                        <p>
                            Through Matplotlib and Seaborn, I&apos;ve designed
                            intricate and insightful visualizations, turning raw
                            data into comprehensible graphics that tell
                            compelling stories.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            🗄️・Web Development:
                        </h4>
                        <p>
                            With Django, I&apos;ve created scalable and robust
                            web applications, offering dynamic user experiences
                            while ensuring backend integrity.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            📥・Automation & Scripting:
                        </h4>
                        <p>
                            Python&apos;s simplicity made tasks like web
                            scraping with Beautiful Soup or automating mundane
                            tasks with scripts.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="md:text-xl font-medium">
                            🛠️・Utility & Tooling:
                        </h4>
                        <p>
                            PyTest has been indispensable for ensuring the
                            robustness of my code through unit testing.
                            Meanwhile, virtualenv has been crucial in managing
                            project-specific dependencies, ensuring consistency
                            across development environments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
