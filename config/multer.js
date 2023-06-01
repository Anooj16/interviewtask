const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/blog'); // Specify the directory to store the uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original filename for the uploaded file
    }
  });

  const upload = multer({storage : storage})

module.exports = {
  upload,
};