# React Student CRUD Application

A small learning project built to practice CRUD operations, React component structure, client-side routing, form handling, validation, and communication with a REST-style data source.

## Features

- View a list of student records
- Add new student records
- View individual student details
- Edit existing student records
- Delete records with confirmation
- Basic required-field validation
- Client-side routing between CRUD screens
- Responsive interface styled with Tailwind CSS

## Technologies

- React
- JavaScript
- React Router
- Fetch API
- Tailwind CSS
- JSON-based test data

## Application Structure

The application separates the main CRUD operations into React components:

- `StudentTable` — displays student records and provides View, Edit, and Delete actions
- `CreateStudent` — handles creation of new student records and form validation
- `EditStudent` — handles editing existing records
- `ViewDetails` — displays an individual student record

React Router is used to navigate between the different screens.

## Data Source

The frontend expects a REST-style endpoint at:

```text
http://localhost:8000/students
```

A `db.json` file is included in the repository as sample data for local development.

## Running the Project

Install the project dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

A local REST service must also be running on port `8000` and expose the `/students` resource for the CRUD operations to work.

## Purpose

This project was created as a learning exercise while strengthening my React fundamentals, particularly:

- Component-based UI development
- State management with React hooks
- Form handling and validation
- Client-side routing
- REST-style CRUD operations
- Asynchronous requests using the Fetch API

## Status

Learning project. It is intended to demonstrate foundational React CRUD concepts rather than serve as a production application.
