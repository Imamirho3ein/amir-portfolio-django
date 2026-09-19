import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import axios from "axios";

import "./Experience.css";


function Experience() {

    const [experiences, setExperiences] = useState([]);


    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/api/experience/")
            .then((response) => {

                setExperiences(response.data);

            })
            .catch((error) => {

                console.log(
                    "Experience API Error:",
                    error
                );

            });

    }, []);


    return (

        <section
            className="experience-section"
            id="experience"
        >

            <div className="experience-container">

                <motion.div
                    className="experience-heading"
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.7
                    }}
                >

                    <span className="section-label">
                        EXPERIENCE
                    </span>

                    <h2>
                        My{" "}
                        <span>
                            Experience
                        </span>
                    </h2>

                </motion.div>


                <div className="experience-list">

                    {
                        experiences.map((experience, index) => (

                            <motion.article
                                className="experience-card"
                                key={experience.id}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -40 : 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                            >

                                <div className="experience-dot"></div>


                                <div className="experience-content">

                                    <div className="experience-top">

                                        <div>

                                            <h3>
                                                {experience.job_title}
                                            </h3>

                                            <span className="experience-company">
                                                {experience.company}
                                            </span>

                                        </div>


                                        {
                                            experience.is_current && (

                                                <span className="experience-current">
                                                    Current
                                                </span>

                                            )
                                        }

                                    </div>


                                    <div className="experience-date">

                                        {
                                            experience.start_date
                                        }

                                        {" — "}

                                        {
                                            experience.is_current
                                                ? "Present"
                                                : experience.end_date
                                        }

                                    </div>


                                    <p>
                                        {experience.description}
                                    </p>

                                </div>

                            </motion.article>

                        ))
                    }

                </div>

            </div>

        </section>

    );
}


export default Experience;