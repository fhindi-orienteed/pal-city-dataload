// parser/CSVParser.js
const fs = require('fs');
const csv = require('csv-parser');

class CSVParser {
  constructor(modelClass) {
    this.modelClass = modelClass;
  }

  parse(filePath) {
    return new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          results.push(new this.modelClass(row));
        })
        .on('end', () => resolve(results))
        .on('error', (err) => reject(err));
    });
  }
}

module.exports = CSVParser;