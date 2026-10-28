# Personal Portfolio Website

A full-stack personal portfolio website built with **Django** and **React** to showcase professional experience, education, technical skills, and software development projects.

The website provides a structured way to present a developer's background, highlight completed projects, and make contact information and a downloadable CV accessible to visitors.

## Features

- **Dynamic Profile** — Display personal information, professional title, biography, location, and profile image.
- **Projects Showcase** — Present projects with descriptions, technologies used, GitHub repositories, and live demo links.
- **Skills Section** — Organize and showcase technical skills.
- **Experience & Education** — Display professional experience and educational background.
- **CV Download** — Allow visitors to download the uploaded CV.
- **Contact Form** — Accept contact messages and save valid submissions.
- **Responsive Frontend** — React-based user interface with reusable components.
- **Database-Driven Content** — Manage profile information, projects, skills, experience, and education through Django models.

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- PostgreSQL support
- Pillow for image processing
- Gunicorn
- WhiteNoise

### Frontend
- React 19
- TypeScript / JavaScript
- Vite
- React Router
- Axios
- Framer Motion
- Lucide React

### Development Tools
- Git & GitHub
- npm
- Python virtual environments

## Project Structure

```text
amir-portfolio-django/
├── accounts/
│   └── models.py
├── projects/
│   └── models.py
├── templates/
│   └── index.html
├── requirements.txt
└── frontend/
    ├── package.json
    └── ...
```

*The structure above highlights key application files; exact directory names may vary.*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Python
- Node.js and npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Imamirho3ein/amir-portfolio-django.git
cd amir-portfolio-django
```

### 2. Set Up the Python Environment

```bash
python -m venv venv
```

Activate the environment:

**Windows**
```bash
venv\Scripts\activate
```

**macOS / Linux**
```bash
source venv/bin/activate
```

### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 4. Apply Database Migrations

```bash
python manage.py migrate
```

### 5. Run the Django Development Server

```bash
python manage.py runserver
```

Open `http://127.0.0.1:8000/` in your browser.

### 6. Set Up the Frontend

Navigate to the frontend directory containing `package.json`:

```bash
cd frontend
npm install
npm run dev
```

> If your local project uses a different frontend directory or requires additional environment variables, adjust these commands to match its configuration.

## Data Models

The project includes Django models for managing portfolio content.

| Model | Purpose |
|---|---|
| `Profile` | Personal details, biography, profile image, and CV |
| `Experience` | Professional experience |
| `Education` | Academic background |
| `Skill` | Technical skills |
| `Project` | Project descriptions, technologies, images, features, and repository/demo links |

## Use Cases

This project can be used as:

- A personal portfolio for software developers.
- A showcase for programming projects and technical skills.
- A foundation for building a content-managed portfolio website.
- A practical example of using Django alongside a modern React frontend.

## Future Improvements

- Add automated tests for backend and frontend functionality.
- Improve API documentation and frontend-backend integration.
- Add more advanced project filtering and search.
- Introduce a dedicated portfolio content management interface.
- Add continuous integration and automated deployment.
- Improve accessibility, performance, and SEO.

## Author

**Amirhossein**

Python & Django Developer | Backend Development | REST APIs

- GitHub: [@Imamirho3ein](https://github.com/Imamirho3ein)
- Project Repository: [amir-portfolio-django](https://github.com/Imamirho3ein/amir-portfolio-django)

---

*Built to showcase development experience, technical skills, and software projects.*
