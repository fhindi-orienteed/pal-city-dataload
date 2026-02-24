const TaskManager = require('../../services/TaskManager');
exports.startTask = async (req, res) => {
    TaskManager.processGroupsTask()

    res.status(202).json({
        message: "Task started! Watch the terminal for logs.",
        file: "groups.csv"
    });
};

exports.stopTask = (req, res) => {
    res.json({ message: "Task stopping logic goes here" });
};

exports.getStatus = (req, res) => {
    res.json({ message: "Task status: Running" });
};