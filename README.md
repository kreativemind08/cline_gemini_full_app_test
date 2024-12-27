# Node.js Dashboard Application

## Description

This is a full-stack Node.js application with a responsive side menu, displaying user data and metrics. It uses Express for the backend, Tailwind CSS for styling, and interacts with a MySQL database.

## Features

- Responsive side menu with "User Data" and "Metrics" options.
- "User Data" page displaying user information in a table.
- "Metrics" dropdown with "Spin Metrics" and "Number of Page Visits" options.
- "Spin Metrics" page showing the number of spins per day for the last 7 days.
- "Number of Page Visits" page displaying the number of page visits for the last 7 days.
- Lemon green and orange theme colors.

## Technologies Used

- Node.js
- Express
- Tailwind CSS
- MySQL

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL installed and running.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nodejs-dashboard-app
   ```
   (Replace `<repository-url>` with the actual repository URL once available)

2. Install the backend dependencies:
   ```bash
   npm install
   ```

3. Set up the MySQL database:
   - Create a MySQL database named `dashboard_db`.
   - Run the SQL script `create_db.sql` to create the necessary tables and seed data. You can use a tool like MySQL Workbench or the MySQL command-line client:
     ```bash
     mysql -u your_user -p < create_db.sql
     ```
     Replace `your_user` with your MySQL username. You will be prompted for your password.

### Running the Application

1. Start the backend server:
   ```bash
   node server.js
   ```

2. Open the `public/index.html` file in your web browser.

## Development

Feel free to contribute to the development of this application. You can modify the frontend in the `public` directory and the backend logic in `server.js`.

## Further Improvements

- Implement more detailed user data and metrics.
- Implement user authentication.
- Implement more robust error handling.
- Add unit and integration tests.
- Deploy the application to a hosting platform.
