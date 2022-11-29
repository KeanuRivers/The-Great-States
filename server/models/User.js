const mongoose = require("mongoose")

const userState = new mongoose.Schema({
username: String,
email: String,
})

module.export = mongoose.model("User", userState)
