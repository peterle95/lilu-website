# Docker Implementation for Tarot Website

This project uses Docker to containerize a Node.js web application with Nginx as a reverse proxy.

## Architecture
- Node.js application container (app)
- Nginx web server container (nginx)

## Setup Instructions
1. Install Docker and Docker Compose
2. Run `docker-compose up --build`
3. Access the website at http://localhost

## Container Details
- Node.js container exposes port 3000
- Nginx container exposes port 80 and proxies requests to the Node.js container
