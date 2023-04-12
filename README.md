# 

A basic starter template for using Node 16 / React 18.2.0 / PostgreSQL 13  

## Installation

1. Make sure you have [docker](https://docs.docker.com/get-started/) installed

2. Clone the repo

```bash
git clone https://github.com/garymuff/react_postgres_docker_app.git
```
3. Navigate into the repo and run docker compose.
```bash
docker compose up
```

## Usage

Node will be running the React starter app on localhost:3000

PostgreSQL db is accessible on localhost:5432

Postgres Defaults:
      POSTGRES_USER: test
      POSTGRES_PASSWORD: test_pass
      POSTGRES_DB: test


#

## About 

This is a fullstack application using Typescript/Node/express/prisma/postgresSQL. This app displays a list of classes. Each classes will display the students enrolled and you can click into each student profile. This app allows you to Create/Edit.Delete classes and students

## To Run

run docker compose up

cd to react_app
npm install
npm start

cd to backend 
npm install
npm run dev

## Apis

/classes: Displays all classes

/classes/{id}: Displays info about a class

/classes/create-class: Creates a class

/classes/{id}/update-class: Updates a class

/classes/{id}/add-student: Adds student to class

/classes/student/{id}: Info about the student inside the class

/classes/student/{id}/update: Updates a student

## Improvements

Wanted to do both class to student view and student -> class view. I was only able to complete the student to class view 

for Updating/Creating students or classes I would of like to have that in the same route rather than a new route

