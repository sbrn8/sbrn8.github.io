import React from 'react';

const GithubIcon = () => (
    <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
        -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
        -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
        .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
        2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
        1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg height="16" width="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const projects = [
    {
        title: "Stash – AI Bookmarking App",
        description: "A full-stack web app that uses Google Gemini Vision API to automatically extract and categorize metadata from screenshots and links. Built with React, TypeScript, and deployed on Vercel.",
        tags: ["React", "TypeScript", "Gemini API", "Vercel", "Leaflet"],
        link: "https://savetostash.vercel.app",
        github: "https://github.com/sbrn8/stash",
    },
    {
        title: "Delibrium – Real-Time Deliberation Platform",
        description: "A civic technology platform built for UW research that enables multi-device group decision-making using real-time WebSocket state synchronization and live shared visualizations.",
        tags: ["JavaScript", "WebSockets", "Petite Vue", "CSS"],
        github: "https://github.com/delibrium"
    },
    {
        title: "FocusStake – Web3 Accountability dApp",
        description: "A decentralized app where users stake ETH on personal commitments for accountability. Features a compassionate slip system to pause progress instead of full reset. Built with Solidity smart contracts on Sepolia testnet.",
        tags: ["Next.js", "TypeScript", "Solidity", "Hardhat", "Wagmi", "RainbowKit", "Tailwind CSS"],
        github: "https://github.com/sbrn8/FocusStake"
    },
    {
        title: "Clinical OCD Data Insight Dashboard",
        description: "An interactive Power BI dashboard analyzing clinical data across 1,500 patients to surface trends in symptom severity, demographics, and treatment outcomes.",
        tags: ["SQL", "Excel", "Power BI", "Data Analysis"],
    },
    {
        title: "Personal Portfolio",
        description: "This website — a responsive personal portfolio built with React.",
        tags: ["React", "JavaScript", "CSS"],
        github: "https://github.com/sbrn8/sbrn8.github.io",
        link: "https://sbrn8.github.io",
    }
];

const Project = () => {
    return (
        <section className="projects-section" id="projects">
            <h2 className="projects-heading">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-card-body">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                        <div className="project-card-footer">
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span className="tag-pill" key={i}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="project-link" aria-label="GitHub repository">
                                        <GithubIcon />
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                        className="project-link" aria-label="Live demo">
                                        <ExternalLinkIcon />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;