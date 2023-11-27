import React from "react";
import Image from "next/image";
import { FaNodeJs } from "react-icons/fa";

import pm2Monitoring from "@/public/skills/pm2-monitoring.png";

export function Node() {
    return (
        <div className="h-full flex flex-col items-center gap-7 text-white p-4">
            <div className="flex justify-center items-center w-full gap-3 text-3xl md:text-5xl py-8">
                <FaNodeJs />
                <h3 className="font-bold">NodeJS</h3>
            </div>
            <div className="flex flex-col gap-8 border-t pt-10">
                <div className="flex flex-col gap-3">
                    <h4 className="text-2xl font-medium">💬・Description:</h4>
                    <p>
                        When I started out with NodeJS, I often chose Express as
                        my framework of choice, mainly because of its simplicity
                        and flexibility. Express is ideal for creating fast,
                        minimalist web applications with NodeJS. For smaller
                        projects, such as backends for blogs or applications for
                        my clients, Express was perfect because it was so easy
                        to learn.
                    </p>
                </div>
                <div className="flex flex-col gap-8 border-t pt-10">
                    <h4 className="text-2xl font-medium">
                        💻・Managing NodeJS applications with PM2:
                    </h4>
                    <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-5 w-full">
                        <div>
                            <p>
                                <span className="font-bold">
                                    💻・Proficient:
                                </span>{" "}
                                PM2 is a process manager for NodeJS applications
                                in production. When I deployed my applications
                                on servers.
                            </p>
                        </div>
                        <p>
                            <span className="font-bold">
                                🚀・Automatic startup:
                            </span>{" "}
                            PM2 allowed me to automatically start my
                            applications after a system reboot.
                        </p>
                        <p>
                            <span className="font-bold">🗄️・Instances:</span> To
                            take advantage of multi-core systems, I used PM2 to
                            run multiple instances of my application, improving
                            performance and reliability.
                        </p>
                        <p>
                            <span className="font-bold">🧮・Monitoring: </span>
                            With PM2, I was able to monitor CPU and memory usage
                            and view logs directly from its CLI.
                        </p>
                        <p>
                            <span className="font-bold">
                                📥・Update without downtime:{" "}
                            </span>
                            When I updated my code, I used PM2 to restart the
                            instances smoothly without interrupting the service.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 border-t pt-10">
                    <h4 className="text-2xl font-medium">🎯・Goals:</h4>
                    <ul className="flex flex-col gap-3 md:grid md:grid-cols-1 mb-5">
                        <li>
                            <span className="font-bold">
                                Create my own packages
                            </span>
                            <p>Colors manager package.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
