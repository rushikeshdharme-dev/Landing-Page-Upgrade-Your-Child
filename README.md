Upgrade Your Child – Marketing Landing Page (React)

This repository contains the official marketing landing page for Upgrade Your Child™, built using React.js as a production-ready single-page application.

The project demonstrates my ability to design, structure, and deploy a real-world frontend application with a custom domain and live users.

🔗 Live Website: https://upgradeyourchild.in

🎯 Project Objective

The objective of this project was to:

Build a clean, fast, and responsive landing page

Clearly communicate the platform’s value to parents and students

Act as the public-facing entry point for the Upgrade Your Child ecosystem

Deploy and maintain the site on a custom production domain

This repository represents a real deployed product, not a demo or tutorial project.

🧩 Scope of the Project

This project focuses on:

Frontend architecture and component design

Content-driven UI rendering

Smooth navigation and user experience

Responsive layout across devices

Production deployment and domain configuration

Out of scope by design:

Authentication

Backend logic

Database integrations

These concerns are handled by a separate LMS built in Next.js.

🏗️ Technical Overview
Frontend Architecture

Built as a single-page application (SPA)

Component-based design for reusability

Centralized content management via configuration files

UI / UX

Responsive layout using CSS and Bootstrap

Smooth section-based navigation

User-friendly interaction and feedback handling

Deployment

Hosted on Vercel

Integrated with GitHub for CI/CD

Custom domain configured (upgradeyourchild.in)

HTTPS, CDN, and performance optimizations enabled

🛠️ Tech Stack

Frontend

React.js 18 (Create React App)

React Router DOM

Bootstrap

react-scroll

smooth-scroll

react-toastify

Forms & Communication

EmailJS (contact form integration)

Deployment

Vercel

Custom domain via Namecheap

🔄 Application Flow
User
 ↓
Landing Page (React SPA)
 ↓
Scroll-based navigation & content sections
 ↓
Contact / enquiry interaction
 ↓
Further engagement via platform services


The landing page is intentionally lightweight, optimized for speed, clarity, and accessibility.

📂 Project Structure
├── public/
│   ├── img/              # Images and static assets
│   ├── css/              # Styling files
│   └── index.html
├── src/
│   ├── components/       # Reusable React components
│   ├── data.json         # Centralized site content
│   ├── App.js
│   └── index.js
├── package.json
└── README.md


The structure allows easy updates to content and visuals without changing core logic.

⚙️ Local Setup
1. Clone the Repository
git clone <repository-url>
cd upgrade-your-child-landing

2. Install Dependencies
npm install
# or
yarn

3. Run Locally
npm start
# or
yarn start


The application will run on:
👉 http://localhost:3000

🌐 Deployment Details

Deployed on Vercel

Automatic builds triggered via GitHub

Custom production domain configured

Landing page runs independently of backend systems

⚖️ Design Decisions & Trade-offs

Chose Create React App for stability and predictable builds

Prioritized clarity and performance over heavy animations

Kept the landing page decoupled from backend logic

Designed the frontend to integrate cleanly with a separate LMS

These decisions reflect real-world product development practices.

📈 What This Project Demonstrates (Interview Focus)

Practical React.js development experience

Ability to ship a production-ready frontend

Understanding of SPA architecture and UX principles

Experience with custom domains and cloud deployment

Clean separation between marketing and application layers

👤 Author

Rushikesh Dharme
Full Stack Developer (React | Next.js | MERN)
India 🇮🇳

