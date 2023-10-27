import React from "react";

export interface Skill {
    label: string;
    icon: JSX.Element;
    description?: React.ReactNode;
    background?: string;
    background_second?: string;
}

export interface CategorizedSkills {
    [category: string]: Skill[];
}
