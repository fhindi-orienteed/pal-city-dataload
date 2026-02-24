const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
router.post('/start', TaskController.startTask);

module.exports = router;