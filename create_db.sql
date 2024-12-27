CREATE DATABASE IF NOT EXISTS dashboard_db;

USE dashboard_db;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    verified BOOLEAN,
    spin_count INT,
    page_visit_count INT,
    spin_click_count INT,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS Metrics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    spins INT,
    visits INT,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);
