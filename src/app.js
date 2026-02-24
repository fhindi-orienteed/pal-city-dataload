const express = require('express');
const app = express();

const taskRoutes = require('./server/Routes/taskRoutes'); 
const constants = require('./config/constants');
app.use(express.json());

app.use('/tasks', taskRoutes);

const PORT = 5000; 
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`Try POST request to: http://localhost:${PORT}/tasks/start`);
});