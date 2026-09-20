import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
    Code2,
    ExternalLink
} from "lucide-react";

import { motion } from "framer-motion";

import API_BASE_URL from "../api";

import "./Projects.css";


function Projects() {

    const [projects, setProjects] = useState([]);


    useEffect(() => {

        axios
            .get(`${API_BASE_URL}/api/projects/`)
            .then((response) => {

                setProjects(response.data);

            })
            .catch((error) => {

                console.log(
                    "Projects API Error:",
                    error
                );

            });

    }, []);


    return (

        <section
            className="projects-section"
            id="projects"
        >

            <div className="projects-container">


                <div className="projects-heading">

                    <span className="section-label">
                        PROJECTS
                    </span>


                    <h2>

                        My Latest

                        <span>
                            {" "}Work
                        </span>

                    </h2>

                </div>


                <div className="projects-grid">


                    {projects.map((project, index) => (

                        <motion.article
                            className="project-card"
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 40
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                        >


                            <Link
                                to={`/projects/${project.slug}`}
                                className="project-card-main"
                            >


                                {project.image ? (

                                    <img
                                        src={
                                            project.image.startsWith("http")
                                                ? project.image
                                                : `http://127.0.0.1:8000${project.image}`
                                        }
                                        alt={project.title}
                                        className="project-image"
                                    />

                                ) : (

                                    <div className="project-placeholder">

                                        PROJECT

                                    </div>

                                )}


                                <div className="project-content">


                                    <h3>
                                        {project.title}
                                    </h3>


                                    <p>

                                        {
                                            project.short_description ||
                                            project.description
                                        }

                                    </p>


                                    <div className="project-tags">


                                        {project.technologies
                                            ?.split(/[,\s]+/)
                                            .filter(Boolean)
                                            .map((tech) => (

                                                <span key={tech}>

                                                    {tech}

                                                </span>

                                            ))
                                        }


                                    </div>


                                </div>


                            </Link>


                            <div className="project-links">


                                {project.github_url && (

                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                        }}
                                    >

                                        <Code2 size={17} />

                                        Code

                                    </a>

                                )}


                                {project.demo_url && (

                                    <a
                                        href={project.demo_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                        }}
                                    >

                                        <ExternalLink size={17} />

                                        Demo

                                    </a>

                                )}


                            </div>


                        </motion.article>

                    ))}


                </div>


            </div>


        </section>

    );

}


export default Projects;