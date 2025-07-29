import React from 'react'
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import askflowImage from '../assets//askflow.jpeg';
import brainboardImage from '../assets//brain-board.jpeg';


const projects = [
  {
    id: 1,
    title: "TaskFlow",
    description: "A beautiful landing page app using React and CSS.",
    tags: ["React", "CSS"],
    image: askflowImage,
    demoUrl: "https://task-f-low-rose.vercel.app/",
    githubUrl: "https://github.com/Mohammad-Adnan-Shakil/TaskFLow",
  },
  {
    id: 2,
    title: "Brain-Board",
    description:
      "Brain-Board is a simple and intuitive note-saving application that lets you create, edit, view, and delete notes with ease.",
    tags: ["React", "Tailwind"],
    image: brainboardImage,
    demoUrl: "https://brain-board-2-0.vercel.app/",
    githubUrl: "https://github.com/Mohammad-Adnan-Shakil/Brain-Board-2.0",
  },
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one is crafted with a focus on functionality, UI, and user experience.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden min-h-[480px] w-[320px]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 text-primary hover:underline"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center gap-1 text-foreground hover:underline"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mohammad-Adnan-Shakil"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
