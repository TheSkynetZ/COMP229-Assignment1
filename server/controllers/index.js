/* Author: Le Minh Pham
 * StudentID: 300814556
 * Date: Oct 22th 2020
 */

let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {
        title: 'Home'
    });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', {
        title: 'About'
    });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {
        title: 'Projects'
    });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {
        title: 'Services'
    });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', {
        title: 'Contact'
    });
}