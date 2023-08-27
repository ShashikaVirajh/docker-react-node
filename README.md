
# Dockerized React Node App

Full-stack app built using React, Node.js, Express, and MongoDB. Everything is Dockerized for easier development and deployment.

## Technologies Used
- FrontEnd: React
- Backend: Node, Express, MongoDB
- Docker


## Why Use Docker and Docker Compose
**Docker**: Provides isolation for your apps, making it easier to build, run, and deploy.  
**Docker Compose**: Manages multi-container setups, great for local development and staging.

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



