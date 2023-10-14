import { ReactNode } from "react";
import cn from "clsx";

type SectionProps = {
	heading: string;
	className?: string;
	children: ReactNode;
};

export function Section({ heading, children, className }: SectionProps) {
	return (
		<section
			className={cn(
				"flex flex-col md:flex-row gap-4 md:gap-9 col-reverse",
				className,
			)}
		>
			<h2
				className={
					"md:w-36 text-primary shrink-0 md:text-3xl text-2xl border-r-[1px] border-secondary"
				}
			>
				{heading}
			</h2>
			{children}
		</section>
	);
}
