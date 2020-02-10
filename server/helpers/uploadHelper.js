import multer from 'multer';




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
  });
  
  export var upload = multer({ 
    storage: storage
  });
  
 export function validate(req, res, next) {
    if (!req.file) {
      return res.send({
        errors: {
          message: 'file cant be empty'
        }
      });
    }
    next();
  }