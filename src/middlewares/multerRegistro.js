const path = require('path');


// Multer
const multer = require('multer') // multer va en routes
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

const whitelist = [
   'image/png',
   'image/jpeg',
   'image/jpg',
   'image/gif',
   'image/webp'
 ]
const fileFilter = (req, file, cb)=> {
   if(whitelist.includes(file.mimetype) ){ 
      cb(null, true)
         console.log(path.extname(file.originalname))
   }else{
      cb(null, false)
   }
} 

  const uploadFile = multer({ storage, fileFilter });


  module.exports = uploadFile