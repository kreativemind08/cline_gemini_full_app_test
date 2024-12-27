const db = require('../models');
const Metric = db.Metric;
const { Op } = require('sequelize');

exports.getSpinMetrics = async (req, res) => {
    try {
        const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
        const metrics = await Metric.findAll({
            where: {
                date: {
                    [Op.gte]: sevenDaysAgo
                }
            },
            order: [['date', 'ASC']]
        });
        res.json(metrics);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving spin metrics."
        });
    }
};

exports.getPageVisits = async (req, res) => {
    try {
        const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
        const visits = await Metric.findAll({
            where: {
                date: {
                    [Op.gte]: sevenDaysAgo
                }
            },
            order: [['date', 'ASC']]
        });
        res.json(visits);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving page visit metrics."
        });
    }
};
