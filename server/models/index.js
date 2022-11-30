const mongoose = require ("mongoose")
const User = require("../models/User")
const State = require("../models/States")


mongoose.connect("mongodb://localhost/states");

