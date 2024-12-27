const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController');

router.get('/spins', metricsController.getSpinMetrics);
router.get('/page-visits', metricsController.getPageVisits);

module.exports = router;
