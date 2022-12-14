const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const bookmarkSchema = new Schema({
    site: { type: String },
    url: { type: String },
    category: { type: String},
});

const bookmark = mongoose.model('bookmark', bookmarkSchema)

module.exports = bookmark