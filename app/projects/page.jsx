import React from "react";
import { Navigation } from "../components/nav";
import data from "../../data.json";
import ProjectsComponent from "./projects";

export default function ProjectsPage() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-12 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Explore my work !
                    </p>
                </div>

                <ProjectsComponent />
            </div>
        </div>
    );
}
