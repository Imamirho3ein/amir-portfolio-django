import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectDetail from "./pages/ProjectDetail";


function Home() {

    return (

        <>

            <Navbar />

            <main>

                <Hero />

                <About />

                <Skills />

                <Projects />

                <Experience />

                <Education />

                <Contact />

            </main>

            <Footer />

        </>

    );

}


function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/projects/:slug"
                    element={<ProjectDetail />}
                />

            </Routes>

        </BrowserRouter>

    );

}


export default App;