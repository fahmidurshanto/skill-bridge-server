## Skill Bridge Backend API

This project provides the backend API for the Skill Bridge web application, a platform for job seekers and employers. It utilizes Express.js and MongoDB to manage user authentication, job postings, applications, and job listings.

**Features:**

- **Authentication:**
  - User registration and login with email and password.
  - JWT token-based authentication for secure API access.
- **Job Management:**
  - Users can post and manage their own jobs.
  - Categorization of jobs for easier navigation (on-site, remote, hybrid, part-time).
  - Ability to view all posted jobs, specific job details, and applications received.
  - Functionality to delete and update posted jobs.
- **Job Listings:**
  - Retrieval of jobs based on category.
  - Access to details of all posted jobs.
- **Applications:**
  - Users can apply for job postings.
  - Validation to prevent users from applying to their own jobs and after the application deadline.
  - Ability for employers to see all applications received for their posted jobs.

**Technologies Used:**

- Backend:
  - Node.js
  - Express.js
  - Mongoose (likely, not explicitly mentioned in the code)
  - MongoDB
  - JWT (JSON Web Token)
  - dotenv (for environment variables)
  - cors
