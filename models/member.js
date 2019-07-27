var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: String,
});

const memberModel = mongoose.model('Member', memberSchema);

module.exports = memberModel;