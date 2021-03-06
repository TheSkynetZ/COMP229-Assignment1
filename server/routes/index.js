/* Author: Le Minh Pham
 * StudentID: 300814556
 * Date: Oct 6th 2020
 */

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* Get Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* Post Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* Get Route to perform userLogout */
router.get('/logout', indexController.performLogout);


module.exports = router;