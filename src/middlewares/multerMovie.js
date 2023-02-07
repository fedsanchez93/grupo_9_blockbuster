const path = require('path');


// Multer
const multer = require('multer') // multer va en routes
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/img-movies'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
  const uploadFile = multer({ storage });


  module.exports = uploadFile