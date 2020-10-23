/* Author: Le Minh Pham
 * StudentID: 300814556
 * Date: Oct 22th 2020
 */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the user model instance
let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {
        title: 'Home',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', {
        title: 'About',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {
        title: 'Projects',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {
        title: 'Services',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', {
        title: 'Contact',
        displayName: req.user ? req.user.displayName : ''
    });
}

module.exports.displayLoginPage = (req, res, next) => {
    //check if the user is already logged in
    if (!req.user) {
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    } else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
        (err, user, info) => {
            //server err?
            if (err) {
                return next(err);

            }
            //is there an user login error?
            if (!user) {
                req.flash('loginMessage', 'Authentication Error');
                return res.redirect('/login');
            }
            req.login(user, (err) => {
                //server err?
                if (err) {
                    return next(err);

                }
                return res.redirect('/contact-list');
            });

        }
    )(req, res, next);
}


module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect("/");
};