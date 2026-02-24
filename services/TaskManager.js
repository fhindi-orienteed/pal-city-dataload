const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');
const constants = require('../config/constants');

class TaskManager {
    static async processGroupsTask() {
        const results = [];
        const filePath = constants.GROUPS_CSV_PATH;

        console.log("🚀 Processing file: " + filePath);

        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .on('error', (err) => reject(new Error("File not found at: " + filePath)))
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', async () => {
                    console.log(`📋 Found ${results.length} rows. Starting API calls...`);
                    
                    for (const row of results) {
                        try {
                            await axios.post(`${constants.EXTERNAL_API_BASE_URL}/new`, row);
                            console.log(`✅ Success: Row processed`);
                        } catch (error) {
                            console.error(`❌ Failed: ${error.hostname || 'API Error'} - ${error.message}`);
                        }
                    }
                    
                    const summary = { total: results.length, status: 'Success' };
                    console.log("🏁 Task completed successfully:", summary); 
                    
                    resolve(summary);
                });
        });
    }
}

module.exports = TaskManager;