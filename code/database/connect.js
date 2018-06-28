const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dbcback');
mongoose.Promise = global.Promise;

module.exports = mongoose;