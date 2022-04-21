var express = require('express');
var router = express.Router();
var matchController = require("../Controllers/MatchController");
/* GET users listing. */
router.get('/',);
router.post('/',matchController.add)


module.exports = router;
