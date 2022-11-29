const mongoose = require ("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/states");

new User({ name:"Keanu", email:"keanu22@gmail.com}"})