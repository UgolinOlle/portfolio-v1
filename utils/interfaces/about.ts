import React from "react";

export interface Skill {
	label: string;
	icon: JSX.Element;
}

export interface CategorizedSkills {
	[category: string]: Skill[];
}
