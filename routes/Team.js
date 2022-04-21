var express = require('express');
var router = express.Router();
var teamController = require('../Controllers/TeamController')
var multer = require('../Controllers/Multer')

/* GET users listing. */
router.get('/',teamController.get );
router.get('/:id',teamController.getOne );
router.post('/',multer.upload.single('photo'),teamController.add)

module.exports = router;
