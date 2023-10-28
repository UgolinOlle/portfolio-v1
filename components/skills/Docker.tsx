import React from "react";
import Image from "next/image";

import nicokaLogo from "@/public/nicoka-logo.png";
import azertyLogo from "@/public/azerty-logo.svg";
import { FaDocker } from "react-icons/fa";

export function Docker() {
    return (
        <div className="h-full flex flex-col items-center gap-7 text-white p-4">
            <div className="flex justify-center items-center w-full gap-3 text-2xl md:text-5xl py-8">
                <FaDocker />
                <h3 className="font-bold">Docker</h3>
            </div>
            <h4 className="text-white text-lg opacity-70">My works</h4>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3 h-auto w-full">
                {/* Nicoka */}
                <div className="space-y-3 pl-3 transition-all p-3 h-auto">
                    <div className="flex space-x-2">
                        <Image
                            src={nicokaLogo}
                            alt="Nicoka Logo"
                            width={30}
                            height={25}
                            className="rounded-lg"
                        />
                        <h4 className="md:text-2xl font-medium">・Nicoka</h4>
                    </div>
                    <p className="text-justify">
                        During my time at Nicoka, I was faced with a major
                        challenge. The majority of the company&apos;s machines
                        were running Windows, but I was running MacOS. So
                        that&apos;s where Docker came in.
                    </p>
                    <p className="text-justify">
                        Thanks to Docker, I was able to emulate the behavior of
                        the Windows Subsystem for Linux (WSL) directly on
                        Windows machines, thus providing a homogeneous platform
                        for development. This eliminated the need for developers
                        to juggle different environments or adjust their code to
                        suit Windows.
                    </p>
                    <p className="text-justify">
                        But I didn&apos;t stop there. To make the process even
                        smoother, I wrote a bash script that automated the
                        entire workflow, from project recovery (clone) to
                        database installation and data dumps. Not only did this
                        speed up the set-up process for new developers, it also
                        ensured that everyone was working in a consistent
                        environment.
                    </p>
                </div>

                {/* Azerty Consulting */}
                <div className="space-y-3 pl- transition-all 3 p-3 h-auto">
                    <div className="flex space-x-2 justify-center items-center">
                        <Image
                            src={azertyLogo}
                            alt="Azerty Consulting Logo"
                            width={30}
                            height={25}
                        />
                        <h4 className="md:text-2xl font-medium">
                            ・Azerty Consulting
                        </h4>
                    </div>
                    <p className="text-justify">
                        Azerty&apos;s Reconnect presented another set of
                        challenges. Here, Docker was used primarily for DevOps
                        tasks. With Docker, I was able to configure and launch
                        both the backend and the frontend, ensuring that they
                        communicated seamlessly. In addition, Docker helped me
                        manage the database and server, while ensuring that the
                        hostname was correctly configured via environment
                        variables.
                    </p>
                    <p className="text-justify">
                        In addition, there is was RabbitMQ, a robust messaging
                        system. Thanks to Docker, its integration and management
                        became much simpler, enabling Reconnect to efficiently
                        process large amounts of data in real time.
                    </p>
                </div>
            </div>
        </div>
    );
}
