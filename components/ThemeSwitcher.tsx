import { Listbox } from "@headlessui/react";
import cn from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsCheck, BsMoonStars, BsSunFill } from "react-icons/bs";

const themes = [
    { id: "system", label: "Automatic" },
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
];

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <Listbox value={theme} onChange={(value) => setTheme(value)}>
                {({ open }) => {
                    const iconClassName = cn(
                        "w-5 h-5 transition-colors"
                    );
                    return (
                        <div className="relative">
                            <Listbox.Button
                                className={cn(
                                    "relative w-8 h-8 cursor-default rounded-full flex items-center justify-center focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300",
                                )}
                            >
                                {theme === "dark" ? (
                                    <BsMoonStars
                                        className={`${iconClassName} text-purple`}
                                    />
                                ) : (
                                    <BsSunFill
                                        className={`${iconClassName} text-yellow`}
                                    />
                                )}
                            </Listbox.Button>
                            <AnimatePresence>
                                {open && (
                                    <Listbox.Options
                                        as={motion.ul}
                                        static
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.3,
                                            duration: 0.3,
                                        }}
                                        className="absolute right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 w-42 rounded-xl bg-blur backdrop-blur-lg focus:outline-none sm:text-sm"
                                    >
                                        {themes.map((theme) => (
                                            <Listbox.Option
                                                key={theme.id}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 rounded-md ${
                                                        active
                                                            ? "bg-secondaryA"
                                                            : "text-primary"
                                                    }`
                                                }
                                                value={theme.id}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                                selected
                                                                    ? "font-medium"
                                                                    : "font-normal"
                                                            }`}
                                                        >
                                                            {theme.label}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                                <BsCheck
                                                                    className="w-5 h-5"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                }}
            </Listbox>
        </>
    );
}
