const axios = require('axios');
const { EXTERNAL_API_BASE_URL } = require('../config/constants');

class RESETService {
    static async createGroup(groupData) {
        return axios.post(`${EXTERNAL_API_BASE_URL}/new`, groupData);
    }

    static async updateGroup(groupData) {
        return axios.post(`${EXTERNAL_API_BASE_URL}/update`, groupData);
    }

    static async deleteGroup(groupId) {
        return axios.post(`${EXTERNAL_API_BASE_URL}/delete`, { id: groupId });
    }
}

module.exports = RESETService;