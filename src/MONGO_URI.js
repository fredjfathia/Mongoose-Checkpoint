let mongoose = require('mongoose');
const server = 'localhost:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'myDB';      // REPLACE WITH YOUR DB NAME
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb+srv://fathia:fathia123456@cluster0.9e026.mongodb.net/mydb?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}
module.exports = new Database()