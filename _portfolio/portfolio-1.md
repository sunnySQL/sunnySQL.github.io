---
title: "Web-based User Management System"
excerpt: "Python + Flask + PostgreSQL"
collection: portfolio
---

## Project Description
This project is a secure and scalable web-based application designed for managing academic form submissions and multi-level approvals within a university environment. The system streamlines the process for students to submit official academic requests and enables staff members (e.g., counselors, directors, supervisors) to review, approve, and track submissions.



## Project Demo
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0IOBjLq-FoU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Key Features:
Microsoft Office 365 Authentication:
Only verified UH (University of Houston) users can log in through Microsoft Graph API integration.

Role-Based Access Control:
Supports multiple user roles including Student, Admin, Counselors, Directors, and Supervisor. Role-based route protection is enforced.

Form Submission & Drafts:
Students can fill out forms such as the Special Circumstance Form, Instructor-Initiated Drop Form, Tution Exemption Form, and an Affidavit form, save drafts, or submit for approval.

Multi-Step Approval Workflow:
Once submitted, forms follow a stepwise approval process (e.g., Counselor → Director → Supervisor), and each approver has a custom dashboard to manage pending requests.

Dynamic PDF Generation (LaTeX):
A PDF version of each submission is generated using LaTeX, automatically updated with signatures and approval decisions at every step.

Admin Dashboard:
Admins can create, update, deactivate users, and oversee all form activity within the system.

Dockerized Deployment:
The app and PostgreSQL database are containerized using Docker and easily deployable across environments.

## Tech Stack:
Backend: Python, Flask, SQLAlchemy

Frontend: Jinja2 Templates, HTML/CSS

Auth: Microsoft Graph OAuth 2.0

Database: PostgreSQL

PDF Engine: LaTeX + pdflatex

Deployment: Docker, Railway
