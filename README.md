# Workflow Test Application

This is the Workflow Test application. Below are the steps to set it up and run locally or using Docker.

---

## Running Locally

### Step 1: Set up a `.env` file
- Use the provided `.env.example` file as a guide to create your own `.env` file.
- Fill in the required environment variables in `.env`.

### Step 2: Set up the Database
- Ensure you have a running **PostgreSQL** database instance.
- Configure the database connection details in your `.env` file.

### Step 3: Install Dependencies
- Run the following command to install dependencies:
  ```bash
  npm ci

### Step 4: Install Dependencies
- Run the following command to start the application:
  ```bash
  npm run

## Running With Docker
You can also run the application using Docker. The prebuilt Docker image is available on Docker Hub.
---

### Steps:
- Run the Docker-compose from the project dir:
  ```bash
    docker-compose up
This will start the application on port 3000.
### Docker Hub Link:
https://hub.docker.com/repository/docker/shirachech15751/workflow-test/
