import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/'); // Destination folder
    },
    filename: (req, file, cb) => {
      // Renaming the file
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

export const upload = multer({storage});