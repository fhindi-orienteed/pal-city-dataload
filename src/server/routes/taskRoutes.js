const express = require('express');
const router = express.Router();
const TaskController = require('../Controllers/TaskController');
router.post('/start', TaskController.startTask);

module.exports = router;