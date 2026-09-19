import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("light-mode");
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    Amir<span>.</span>
                </a>

                <nav
                    className={`navbar-links ${
                        menuOpen ? "active" : ""
                    }`}
                >
                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        Skills
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        Projects
                    </a>

                    <a href="#experience" onClick={closeMenu}>
                        Experience
                    </a>

                    <a href="#education" onClick={closeMenu}>
                        Education
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>
                </nav>

                <div className="navbar-actions">

                    <button
                        type="button"
                        className="theme-button"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    <button
                        type="button"
                        className="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>

                </div>

            </div>
        </header>
    );
}

export default Navbar;