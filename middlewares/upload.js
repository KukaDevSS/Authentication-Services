const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer ({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if ( file.mimetype == "image/png" || file.mimetype == "image/jpg" ) {
            callback(null, true);
        }else{
            console.log("Only jpeg & png images are supported");
            callback(null, false);
        }
    },
    limits: 1024 * 1024 * 2
})

module.exports = upload;