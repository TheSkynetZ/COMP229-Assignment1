// Author: Le Minh Pham
// StudentID: 300814556 
// Date: Oct 22th 2020

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact Model
let Contact = require('../models/contact');

/* Get Route for the Contact List page - Read Operation */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(ContactList);

            res.render('business_contact_list', {title: 'Business Contact List', ContactList: contactList})
        }
    }).sort({name:1});
}); 

module.exports = router;