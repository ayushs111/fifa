var express = require('express');
var router = express.Router();
var CupController = require('../Controllers/CupController')

/* GET users listing. */
router.get('/',teamController.get );
router.post('/',CupController.add)

module.exports = router;
