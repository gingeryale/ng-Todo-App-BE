var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    memberID: String,
    body: String,
});

const taskModel = mongoose.model('Task', taskSchema);

module.exports = taskModel;