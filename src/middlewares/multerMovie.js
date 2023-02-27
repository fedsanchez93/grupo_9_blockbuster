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

  const whitelist = [
   'image/png',
   'image/jpeg',
   'image/jpg',
   'image/gif',
   'image/webp'
 ]
const fileFilter = (req, file, cb)=> {

   if(whitelist.includes(file.mimetype) ){ //path.extname(file.originalname) != '.css'
      cb(null, true)
         console.log(path.extname(file.originalname))
   }else{
      cb(null, false)
      
      // Siempre puedes pasar un error en caso de que algo salga mal:
      //cb(new Error('No tengo la menor idea!'))
      

   }
} 

const uploadFile = multer({ storage, fileFilter }); 

  module.exports = uploadFile