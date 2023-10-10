import { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "clsx";

type NavLinkProps = {
	href: string;
	children: ReactNode;
};

export function NavigationLink({ href, children }: NavLinkProps) {
	const router = useRouter();
	const pathName = `/${router.pathname.split("/")[1]}`;
	const active = pathName === href;
	const isExternal = !href.toString().startsWith("/");

	return (
		<Link
			className={cn(
				"px-4 py-2 rounded-lg text-lg hover:text-primary transition-all flex justify-between items-center gap-2",
				active ? "bg-secondary text-primary" : "text-secondary",
			)}
			href={href}
			target={isExternal ? "_blank" : undefined}
		>
			{children}
		</Link>
	);
}
