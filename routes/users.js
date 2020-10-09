 /* Author: Le Minh Pham
 * StudentID: 300814556
 * Date: Oct 6th 2020 
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
