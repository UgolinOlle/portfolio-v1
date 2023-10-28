import React from "react";
import { CodeBlock } from "react-code-blocks";
import { VscTerminalBash } from "react-icons/vsc";

export function Bash() {
    return (
        <div className="h-full flex flex-col items-center gap-7 text-white p-4">
            <div className="flex justify-center items-center w-full gap-3 text-2xl md:text-5xl py-8">
                <VscTerminalBash />
                <h3 className="font-bold">Bash</h3>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:flex-wrap items-start justify-start gap-8 h-auto w-full border-t pt-10 pb-10">
                {/* Tools */}
                <div className="space-y-3 transition-all h-auto w-full">
                    <h4 className="text-2xl font-medium">Some tools</h4>
                    <ul className="grid grid-cols-2 grid-rows-4 gap-5">
                        <li>
                            <CodeBlock text={"$> Gum"} language="bash" />
                        </li>
                        <li>
                            <CodeBlock text={"$> Cron"} language="bash" />
                        </li>
                        <li>
                            <CodeBlock text={"$> grep"} language="bash" />
                        </li>
                        <li>
                            <CodeBlock text={"$> awk"} language="bash" />
                        </li>
                        <li>
                            <CodeBlock text={"$> curl"} language="bash" />
                        </li>
                        <li>
                            <CodeBlock text={"$> wget"} language="bash" />
                        </li>
                        <li>
                            <CodeBlock text={"$> xargs"} language="bash" />
                        </li>
                        <li>
                            <CodeBlock text={"$> rsync"} language="bash" />
                        </li>
                    </ul>
                </div>

                {/* Description */}
                <div className="space-y-3 transition-all h-auto">
                    <p>
                        <span className="font-bold">
                            💿・Scripting DB tasks:
                        </span>{" "}
                        Bash scripts to automate repetitive database tasks
                        database-related tasks, such as creating, deleting
                        updating or searching for specific specific entries.
                    </p>
                    <p>
                        <span className="font-bold">
                            🚀・Backup and restore:
                        </span>{" "}
                        Automate backups for data security. Create scripts that
                        regularly perform database database dumps, compress and
                        store them and store them. Write scripts to restore
                        these backups when necessary.
                    </p>
                    <p>
                        <span className="font-bold">
                            💻・Optimization and maintenance:
                        </span>{" "}
                        Automation of optimization tasks, such as table repair
                        such as table repair, defragmentation and data integrity
                        data integrity checks.
                    </p>
                </div>
            </div>
            {/* Description 2 */}
            <div className="space-y-3 transition-all h-auto w-full border-t pt-10 pb-5">
                <h4 className="text-2xl font-medium">🎛️・Task automation</h4>
                <p>
                    <span className="font-bold">🗓️・Planning with Cron:</span>{" "}
                    Using Cron in conjunction with Bash, scheduling tasks to run
                    at specific times, whether as backups or specific times, be
                    they daily backups, regular updates regular updates or any
                    other periodic task. periodic task.
                </p>
                <p>
                    <span className="font-bold">
                        🚚・Deployment and updating:
                    </span>{" "}
                    Automate the process of deploying new application
                    application versions or updates, ensuring that each ensuring
                    that each step is carried out in the correct sequence.
                </p>
            </div>
        </div>
    );
}
