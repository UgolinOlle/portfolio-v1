import { ReactNode } from "react";
import cn from "clsx";

type HighlightProps = {
    className?: string;
    children: ReactNode;
};

export function Highlight(props: HighlightProps) {
    return (
        <span className={cn("text-blue font-bold", props.className)}>
            {props.children}
        </span>
    );
}
