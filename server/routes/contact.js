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

/* Get Route for the Contact List page - Read Operation */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            //console.log(ContactList);

            res.render('contact/list', {
                title: 'Business Contact List',
                ContactList: contactList
            })
        }
    }).sort({
        name: 1
    });
});

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
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('contact/update', {
                title: 'Edit Contact',
                contact: contactToEdit
            })
        }
    });
});

/* Get Route for processing the Update page - UPDATE Operation */
router.post('/update/:id', (req, res, next) => {
    let id = req.params.id;
    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    })

    Contact.updateone({
        _id: id
    }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh contact list
            res.redirect('/contact-list');
        }
    })
});

/* Get Route to perform deleting page - DELETE Operation */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    Contact.remove({
        _id: id
    }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh contact list
            res.redirect('/contact-list');
        }
    })
});


module.exports = router;