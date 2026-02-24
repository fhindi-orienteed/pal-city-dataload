class Group {
  constructor({ identifier, title, status, sequence, thumbnail, delete: isDeleted }) {
    this.identifier = identifier; 
    this.title = title;           
    this.status = status;         
    this.sequence = parseInt(sequence); 
    this.thumbnail = thumbnail || null; 
    this.isDeleted = isDeleted === 'true'; 
  }
}

module.exports = Group;