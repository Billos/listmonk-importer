# Introduction

This is a simple importer for listmonk, designed to work with the authentik user management system.
It allows you to import users and lists into listmonk, leveraging the OpenAPI schema to generate types and services.

# Running

Just run the docker compose with the correct environment variables set.

Files:

- `docker-compose.yml`: The docker compose file to run the importer.
- `.env.default`: The environment variables for the authentik instance.
