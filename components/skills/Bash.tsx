import React from "react";
import { CodeBlock } from "react-code-blocks";
import { VscTerminalBash } from "react-icons/vsc";

export function Bash() {
    return (
        <div className="h-full flex flex-col items-center gap-7 text-white">
            <div className="flex justify-center items-center w-full gap-3 text-2xl md:text-5xl py-8">
                <VscTerminalBash />
                <h3 className="font-bold">Bash</h3>
            </div>
            <h4 className="text-white text-lg opacity-70">My works</h4>
            <div className="flex flex-col md:grid md:grid-cols-2 md:flex-wrap items-start justify-start gap-3 h-auto w-full">
                {/* Tools */}
                <div className="space-y-3 pl-3 transition-all p-3 h-auto w-full">
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
                <div className="space-y-3 pl-3 transition-all p-3 h-auto">
                    <p className="text-justify">
                        <span className="font-bold">
                            💿・Scripting DB tasks:
                        </span>{" "}
                        Bash scripts to automate repetitive database tasks
                        database-related tasks, such as creating, deleting
                        updating or searching for specific specific entries.
                    </p>
                    <p className="text-justify">
                        <span className="font-bold">
                            🚀・Backup and restore:
                        </span>{" "}
                        Automate backups for data security. Create scripts that
                        regularly perform database database dumps, compress and
                        store them and store them. Write scripts to restore
                        these backups when necessary.
                    </p>
                    <p className="text-justify">
                        <span className="font-bold">
                            💻・Optimisation et maintenance:
                        </span>{" "}
                        Automatisation des tâches d&apos;optimisation, telles
                        que la réparation des tables, la défragmentation et la
                        vérification de l&apos;intégrité des données.
                    </p>
                </div>
            </div>
            {/* Description 2 */}
            <div className="space-y-3 pl-3 transition-all p-3 h-auto w-full">
                <h4 className="text-2xl font-medium">
                    🎛️・Automatisation de tâches
                </h4>
                <p className="text-justify">
                    <span className="font-bold">
                        🗓️・Planification avec Cron:
                    </span>{" "}
                    Utilisation de Cron conjointement avec Bash, planification
                    des tâches pour qu&apos;elles s&apos;exécutent à des moments
                    spécifiques, qu&apos;il s&apos;agisse de sauvegardes
                    quotidiennes, de mises à jour régulières ou de toute autre
                    tâche périodique.
                </p>
                <p className="text-justify">
                    <span className="font-bold">
                        🚚・Déploiement et mise à jour:
                    </span>{" "}
                    Automatisation du processus de déploiement de nouvelles
                    versions d&apos;applications ou de mises à jour, en
                    garantissant que chaque étape est exécutée dans le bon
                    ordre.
                </p>
            </div>
        </div>
    );
}
