import React from "react";

type ColumnsProps = {
	heading: string;
	href?: string;
	children: React.ReactNode;
};

export function Columns({ heading, href, children }: ColumnsProps) {
	return (
		<div className="flex flex-col justify-center items-center gap-8">
			<h3 className="text-2xl md:text-4xl text-primary">{heading}</h3>
			<div className="w-[1px] h-[15vh] border"></div>
			{children}
		</div>
	);
}
