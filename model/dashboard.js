const mongoose = require('mongoose') 
const Schema   = mongoose.Schema

const dashSchema = new Schema({
    name : {type : String}
})

module.exports = mongoose.model("dashboard", dashSchema)