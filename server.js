// Define models
const db = require('./models');
const sequelize = require('./util/database');

// Sync Sequelize models with the database
sequelize.sync()
    .then(() => {
        // Seed dummy data
        const seedData = async () => {
            const User = db.User;
            const Metric = db.Metric;

            await User.bulkCreate([
                { verified: true, spin_count: 50, page_visit_count: 100, spin_click_count: 25 },
                { verified: false, spin_count: 20, page_visit_count: 50, spin_click_count: 10 },
                { verified: true, spin_count: 100, page_visit_count: 200, spin_click_count: 75 }
            ]);

            for (let i = 0; i < 7; i++) {
                const date = new Date();
                date.setDate(date.getDate() - i);
                const formattedDate = date.toISOString().slice(0, 10);
                const spinCount = Math.floor(Math.random() * 100) + 50;
                const visitCount = Math.floor(Math.random() * 200) + 100;
                await Metric.create({ date: formattedDate, spins: spinCount, visits: visitCount });
            }
            console.log('Dummy data inserted successfully');
        };
        return seedData();
    })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server listening on port 3000');
        });
    })
    .catch(err => {
        console.error('Sequelize sync error:', err);
    });

const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const metricsRoutes = require('./routes/metricsRoutes');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/users', userRoutes);
app.use('/api/metrics', metricsRoutes);
