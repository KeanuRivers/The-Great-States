const { Schema, model } = require("mongoose");

const stateSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    myth: {
        type: String,
        required: true,

    },
})