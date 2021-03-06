const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let synopsisSchema = new Schema({
    teamId: {
        type: Schema.Types.ObjectId,
        required: true
    },

    fileName: {
        type: String,
        required: true
    },
    webViewLink: {
        type: String,
        required: true
    },

    fileId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('synopsis', synopsisSchema);