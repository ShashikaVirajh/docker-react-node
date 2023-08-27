
# Dockerized React Node App

A fully dockerized, simple react, node, mongodb application.

## Table of Contents
- [Dockerized React Node App](#dockerized-react-node-app)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Docker Essentials](#docker-essentials)
    - [Images](#images)
    - [Containers](#containers)
    - [Volumes](#volumes)
  - [Project Architecture](#project-architecture)
    - [Backend Dockerfile](#backend-dockerfile)
    - [Frontend Dockerfile](#frontend-dockerfile)
    - [Docker-Compose File](#docker-compose-file)
    - [Docker Entrypoint Scripts](#docker-entrypoint-scripts)
  - [Why Use Docker and Docker Compose](#why-use-docker-and-docker-compose)



## Overview
Full-stack app built using React, Node.js, Express, and MongoDB. Everything is Dockerized for easier development and deployment.

## Technologies Used
- FrontEnd: React
- Backend: Node, Express, MongoDB
- Docker

## Getting Started

### Prerequisites
Make sure you have Docker and Docker Compose installed on your machine.

### Installation
To get the app running, execute the following command:

`docker-compose up`

## Docker Essentials

### Images
Images serve as the blueprints for containers.  
- **Backend Image**: Built from a Node.js base; contains your backend code.  
- **Frontend Image**: Also built from a Node.js base; set up for your React app.

### Containers
Containers are live instances of images.  
- Frontend Container
- Backend Container
- MongoDB Container

### Volumes
Volumes are used for data persistence.  
- MongoDB Volume: Keeps database data between runs.

## Project Architecture

### Backend Dockerfile
Sets up the Node.js environment and prepares your backend code for running.


### Frontend Dockerfile
Sets up the Node.js environment optimized for running your React app.

### Docker-Compose File
Orchestrates all the services defined in your Dockerfiles. Specifies ports, volumes, and environment variables.


### Docker Entrypoint Scripts
These scripts wait for MongoDB to be ready before starting the app.



## Why Use Docker and Docker Compose
**Docker**: Provides isolation for your apps, making it easier to build, run, and deploy.  
**Docker Compose**: Manages multi-container setups, great for local development and staging.

