// controller/DataLoadController.js
const CSVParser = require('../parser/CSVParser');
const Group = require('../models/Group');
const Category = require('../models/Category');

class DataLoadController {
  async loadGroups(filePath) {
    const parser = new CSVParser(Group);
    const groups = await parser.parse(filePath);
    console.log('Groups Loaded:', groups);
    return groups;
  }

  async loadCategories(filePath) {
    const parser = new CSVParser(Category);
    const categories = await parser.parse(filePath);
    console.log('Categories Loaded:', categories);
    return categories;
  }
}

module.exports = DataLoadController;