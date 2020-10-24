/* Author: Le Minh Pham
 * StudentID: 300814556
 * Date: Oct 22th 2020
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            //console.log(ContactList);

            res.render('contact/list', {
                title: 'Business Contact List',
                ContactList: contactList,
                displayName: req.user ? req.user.displayName : ''
            })
        }
    }).sort({
        name: 1
    });
}

module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('contact/update', {
                title: 'Update Contact',
                contact: contactToEdit,
                displayName: req.user ? req.user.displayName : ''
            })
        }
    });
}

module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id;
    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({
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
}

module.exports.performDeletePage = (req, res, next) => {
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
}