// Author: Le Minh Pham
// StudentID: 300814556 
// Date: Oct 22th 2020 

let mongoose = require('mongoose');

//create a model class
let contactsModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
{
    collection:"contact"
});

module.exports = mongoose.model('Contact', contactsModel);