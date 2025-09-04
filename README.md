# Machinery-Management-System
The Machinery Management System is a full-stack app using Node.js (Express), MySQL, and HTML/JS. It includes a backend (server.js) with REST APIs, a form page (page.html) to add machinery, and a view page (view.html) to display records. Setup includes installing dependencies, creating a MySQL database, and running the server.

## Project Structure

- `server.js`: Node.js/Express backend (REST API + MySQL)
- `page.html`: Page to add machinery items
- `view.html`: Page to view machinery table

## Features

- Add machinery via web form
- View all machinery in tabular form
- Persistent storage with MySQL

## Setup
1. `npm install express mysql2 cors`
2. Create `machinery_db` in MySQL, with `machinery` table as described above.
3. `node server.js`

## Usage

- Open `page.html` to add items
- Open `view.html` to view all machinery
