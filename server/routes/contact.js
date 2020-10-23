// Author: Le Minh Pham
// StudentID: 300814556 
// Date: Oct 22th 2020

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const {
    route
} = require('.');

//connect to our Contact Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact')

/* Get Route for the Contact List page - Read Operation */
router.get('/', contactController.displayContactList);

/* Get Route for displaying the Add page - CREATE Operation */
router.get('/add', (req, res, next) => {
    res.render('contact/add', {
        title: 'Add',
    })
});

/* Get Route for processing the Add page - CREATE Operation */
router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

/* Get Route for displaying the Update page - UPDATE Operation */
router.get('/update/:id', contactController.displayUpdatePage);

/* Post Route for processing the Update page - UPDATE Operation */
router.post('/update/:id', contactController.processUpdatePage);

/* Get Route to perform deleting page - DELETE Operation */
router.get('/delete/:id', contactController.performDeletePage);


module.exports = router;