const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message: {
        id: String,
        room: String,
        partner: String,
        sender: String,
        text: String, 
        sdate: Date
    }
})

module.exports = mongoose.model('Message', messageSchema)