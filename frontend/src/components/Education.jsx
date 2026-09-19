import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import axios from "axios";

import "./Education.css";


function Education() {

    const [educations, setEducations] = useState([]);


    useEffect(() => {

        axios
            .get("http://127.0.0.1:8000/api/education/")
            .then((response) => {

                setEducations(response.data);

            })
            .catch((error) => {

                console.log(
                    "Education API Error:",
                    error
                );

            });

    }, []);


    return (

        <section
            className="education-section"
            id="education"
        >

            <div className="education-container">

                <motion.div
                    className="education-heading"
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
                        EDUCATION
                    </span>

                    <h2>
                        My{" "}
                        <span>
                            Education
                        </span>
                    </h2>

                </motion.div>


                <div className="education-list">

                    {
                        educations.map((education, index) => (

                            <motion.article
                                className="education-card"
                                key={education.id}
                                initial={{
                                    opacity: 0,
                                    y: 35
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1
                                }}
                            >

                                <div className="education-content">

                                    <div className="education-top">

                                        <div>

                                            <h3>
                                                {education.degree}
                                            </h3>

                                            <span className="education-field">
                                                {education.field_of_study}
                                            </span>

                                        </div>

                                    </div>


                                    <div className="education-institution">
                                        {education.institution}
                                    </div>


                                    <div className="education-date">

                                        {education.start_date}

                                        {" — "}

                                        {
                                            education.end_date ||
                                            "Present"
                                        }

                                    </div>


                                    {
                                        education.description && (

                                            <p>
                                                {education.description}
                                            </p>

                                        )
                                    }

                                </div>

                            </motion.article>

                        ))
                    }

                </div>

            </div>

        </section>

    );
}


export default Education;