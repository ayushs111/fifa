var express = require('express');
var router = express.Router();
var playerController = require('../Controllers/PlayerController')
var multer = require('../Controllers/Multer')

/* GET home page. */
router.get('/:id',playerController.get);

router.post('/',multer.upload.single('photo'),playerController.add)

module.exports = router;
