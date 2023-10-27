import React from "react";
import Image from "next/image";

import { FaCodeBranch } from "react-icons/fa";
import { MdCommit } from "react-icons/md";
import { BiGitMerge } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { SiGithubactions } from "react-icons/si";

import nicokaLogo from "@/public/nicoka-logo.png";

export function Git() {
    return (
        <div className="h-full flex flex-col items-center gap-7 text-white">
            <div className="flex justify-center items-center w-full gap-3 text-2xl md:text-5xl py-8">
                <BsGit />
                <h3 className="font-bold">Git</h3>
            </div>
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
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3 h-auto w-full">
                <div className="space-y-3 pl-3 transition-all p-3 h-auto">
                    <p className="text-justify italic pb-5">
                        During my time at Nicoka, the company opted for
                        Bitbucket as its code hosting platform, given its
                        advanced rights management features, its good
                        integration with other Atlassian tools, and its ease of
                        integration with CI/CD pipelines.
                    </p>
                    <p className="text-justify">
                        <span className="font-bold flex items-center">
                            <FaCodeBranch className="font-normal" />
                            ・Branching:
                        </span>{" "}
                        To ensure efficient management of features and fixes, I
                        used branching, a feature-based approach to branching.
                        This allowed me to work on individual elements without
                        disrupting the main code base.
                    </p>
                </div>
                <div className="space-y-3 pl-3 transition-all p-3 h-auto">
                    <p className="text-justify">
                        <span className="font-bold flex items-center">
                            <MdCommit className="text-2xl" />
                            ・Commits and push:
                        </span>{" "}
                        After making the necessary changes to the code, I
                        regularly committed these changes using clear and
                        descriptive commit messages.Once I was satisfied with
                        the work done in my local branch, I pushed these changes
                        to Bitbucket.
                    </p>
                    <p className="text-justify">
                        <span className="font-bold flex items-center">
                            <BiGitMerge className="text-2xl" />
                            ・Merges:
                        </span>{" "}
                        Once approved, I merged the branches. If conflicts
                        arose, I resolved them manually to ensure code
                        integrity.
                    </p>
                    <p className="text-justify">
                        <span className="font-bold flex items-center">
                            <SiGithubactions className="text-2xl" />
                            ・CI/CD:
                        </span>{" "}
                        With the continuous integration implemented on
                        Bitbucket, each push on the master branch triggered a
                        set of actions, including deployment on the
                        application&apos;s servers and instances.
                    </p>
                </div>
            </div>
            <h4 className="text-2xl md:text-3xl font-medium">
                <span className="font-bold">UO</span>
                ・Personal
            </h4>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-3 h-auto w-full">
                <div className="space-y-3 pl-3 transition-all p-3 h-auto">
                    <p className="text-justify">
                        <span className="font-bold">🧑‍🤝‍🧑・Collaboration:</span>
                        For projects where I work in a team, Git facilitates
                        collaboration, allowing multiple developers to work
                        simultaneously on different parts of a project without
                        coming into conflict.
                    </p>
                    <p className="text-justify">
                        <span className="font-bold">
                            💾・Backup and security:
                        </span>
                        By regularly pushing my code to remote repositories
                        (like GitHub, GitLab, or Bitbucket), I make sure I have
                        backups of my code. What&apos;s more, the ability to
                        clone repositories allows me to work on different
                        environments or machines.
                    </p>
                </div>
                <div>
                    <p className="text-justify">
                        <span className="font-bold">
                            🗜️・Commitizen for conventional commits:
                        </span>
                        Adopting Commitizen makes it possible to maintain a
                        clean, structured commit history. Commitizen facilitates
                        the creation of commit messages that follow a defined
                        convention, making the history more readable and
                        understandable. This is particularly useful for the
                        automatic generation of release notes and for quickly
                        understanding the nature (e.g. fix, feat, chore) of the
                        changes made through each commit.
                    </p>
                </div>
            </div>
        </div>
    );
}
