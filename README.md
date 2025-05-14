# Tarot Cards by Lilu

## Project Overview

This project is a containerized web application for "Tarot Cards by Lilu," a tarot card reading service. The website provides information about tarot card readings, an about page highlighting Lilu's expertise, and contact details for inquiries. This project serves as a demonstration of Docker containerization skills through the implementation of a multi-container setup utilizing Node.js and Nginx.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Containerization:** Docker, Docker Compose
- **Web Server:** Nginx (as a reverse proxy)

## Docker Implementation

This project leverages Docker to containerize the application, creating an isolated and reproducible environment that ensures consistent operation across diverse platforms.

### Container Architecture

- **Node.js Application Container:** Hosts the website and manages backend functionalities.
- **Nginx Container:** Acts as a reverse proxy, efficiently handling HTTP requests and routing them to the Node.js application.

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your system.
- Basic understanding of Docker commands.

### Running the Application

1. **Clone this repository:**
   
```bash
   git clone <repository_url>
   cd tarot-website
   ```

2. **Build and start the containers:**

```bash
   docker-compose up --build
```

3. **Access the application:**

- Main website: http://localhost
- Direct access to Node.js app: http://localhost:3000


4. **Stop the containers:**

```bash
   docker-compose down
```

## Docker Commands Reference

```bash
# Build the Docker image
docker build -t tarot-website .

# Run the container in detached mode
docker run -d -p 3000:3000 tarot-website

# List running containers
docker ps

# View container logs
docker logs <container_id_or_name>

# Stop a container
docker stop <container_id_or_name>

# Remove a container
docker rm <container_id_or_name>
```

## Docker Compose Commands

```bash
# Start services defined in docker-compose.yml
docker-compose up

# Start in detached mode
docker-compose up -d

# Rebuild containers and start
docker-compose up --build

# Stop and remove containers
docker-compose down

# View logs
docker-compose logs
```












