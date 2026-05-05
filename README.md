# Dockerized Node.js Service

This repository contains a simple Node.js backend application packaged with Docker. The goal of this project is to demonstrate how to containerize a backend service and run it consistently across environments using Docker and Docker Compose.

## What this project does

The application runs a basic Node.js server and exposes it on a configurable port. It is fully containerized, so it can be started without installing Node.js locally.

## Tech Stack

* Node.js
* Docker
* Docker Compose

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/docker-1.git
cd docker-1
```

### Run with Docker

Build the image:

```bash
docker build -t node-service .
```

Start the container:

```bash
docker run -p 3000:3000 node-service
```

### Run with Docker Compose

```bash
docker-compose up --build
```

## Accessing the app

Once the container is running, open:

```
http://localhost:3000
```

## Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Notes

* The `.env` file is not committed for security reasons.
* Make sure Docker is installed and running before executing commands.
* Ports can be changed in the Docker or Compose configuration if needed.

## Why this project exists

This project was built as a hands-on exercise to understand:

* how Docker images are built
* how containers run Node.js applications
* how Docker Compose simplifies multi-container workflows

## Possible Improvements

* Add environment-based configuration
* Integrate a database service
* Add authentication (JWT)
* Deploy to a cloud platform

## Author

Bhavish
