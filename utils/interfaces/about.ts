import React from "react";

export interface Skill {
    label: string;
    icon: JSX.Element;
    description?: React.ReactNode;
}

export interface CategorizedSkills {
    [category: string]: Skill[];
}
