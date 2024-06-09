import { ReactNode } from "react";
import { Link } from "./Link";

type ButtonProps = {
	href: string;
	className?: string;
	children: ReactNode;
};

export function Button(props: ButtonProps) {
	return (
		<button className={"py-3 px-2"}>
			<Link href={props.href} className={props.className}>
				{props.children}
			</Link>
		</button>
	);
}
