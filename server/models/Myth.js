const { Schema, model } = require("mongoose");

const mythSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    mythText: {
        type: String,
        required: true,

    },
    mythState: {
        type: String,
        required: true,

    },
})
const Myth = model('Myth', mythSchema)

module.exports = Myth;