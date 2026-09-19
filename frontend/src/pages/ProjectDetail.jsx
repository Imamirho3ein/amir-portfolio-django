import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import {
    ArrowLeft,
    Code2,
    ExternalLink
} from "lucide-react";

import { motion } from "framer-motion";

import axios from "axios";

import "./ProjectDetail.css";


function ProjectDetail() {

    const { slug } = useParams();

    const [project, setProject] = useState(null);


    useEffect(() => {

        axios
            .get(
                `http://127.0.0.1:8000/api/projects/${slug}/`
            )
            .then((response) => {

                setProject(response.data);

            })
            .catch((error) => {

                console.log(
                    "Project API Error:",
                    error
                );

            });

    }, [slug]);


    if (!project) {

        return (

            <div className="project-loading">

                Loading...

            </div>

        );

    }


    return (

        <section className="project-detail">

            <div className="project-detail-container">


                <Link
                    to="/#projects"
                    className="back-button"
                >

                    <ArrowLeft size={18} />

                    Back

                </Link>


                <motion.div
                    className="detail-card"
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6
                    }}
                >


                    {
                        project.image ? (

                            <img
                                src={
                                    project.image.startsWith("http")
                                        ? project.image
                                        : `http://127.0.0.1:8000${project.image}`
                                }
                                alt={project.title}
                                className="detail-image"
                            />

                        ) : (

                            <div className="project-placeholder">

                                PROJECT IMAGE

                            </div>

                        )
                    }


                    <div className="detail-content">


                        <h1>

                            {project.title}

                        </h1>


                        {
                            project.project_type && (

                                <span className="project-type">

                                    {project.project_type}

                                </span>

                            )
                        }


                        <p>

                            {
                                project.short_description ||
                                project.description
                            }

                        </p>


                        <div className="detail-tags">

                            {
                                project.technologies &&

                                project.technologies
                                    .split(/[,\s]+/)
                                    .filter(Boolean)
                                    .map((tech) => (

                                        <span key={tech}>

                                            {tech}

                                        </span>

                                    ))
                            }

                        </div>


                        {
                            project.full_description && (

                                <div className="case-section">

                                    <h2>

                                        About Project

                                    </h2>

                                    <p>

                                        {project.full_description}

                                    </p>

                                </div>

                            )
                        }


                        {
                            project.features && (

                                <div className="case-section">

                                    <h2>

                                        Features

                                    </h2>


                                    <ul>

                                        {
                                            project.features
                                                .split(/\r?\n/)
                                                .filter(Boolean)
                                                .map((item, index) => (

                                                    <li key={index}>

                                                        {item}

                                                    </li>

                                                ))
                                        }

                                    </ul>

                                </div>

                            )
                        }


                        {
                            project.challenges && (

                                <div className="case-section">

                                    <h2>

                                        Challenges

                                    </h2>


                                    <p>

                                        {project.challenges}

                                    </p>

                                </div>

                            )
                        }


                        <div className="detail-links">


                            {
                                project.github_url && (

                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >

                                        <Code2 size={18} />

                                        View Code

                                    </a>

                                )
                            }


                            {
                                project.demo_url && (

                                    <a
                                        href={project.demo_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >

                                        <ExternalLink size={18} />

                                        Live Demo

                                    </a>

                                )
                            }


                        </div>


                    </div>


                </motion.div>


            </div>

        </section>

    );

}


export default ProjectDetail;