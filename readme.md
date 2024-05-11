
Project Description
This project is a web application built using Fastify, a web framework for Node.js, and MySQL for the database. It provides CRUD operations for managing categories and products. Additionally, it supports image resizing during upload and displays categories as a tree structure.


Migration & Build Scripts
Migration Script: The migration script is available in the package.json file under the migrate script. It creates tables for categories and products with the specified fields.

Build Script: The build script is available in the package.json file under the build script. It compiles TypeScript files into JavaScript for production use.


Deployment
To deploy and run the website, you can use Docker:

 A Dockerfile is provided in the repository to containerize the application. You can build the Docker image and run it using Docker commands.