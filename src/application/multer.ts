import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images'); // Destination folder
    },
    filename: (req, file, cb) => {
      // Renaming the file
      cb(null, new Date().getTime() + "-" + file.originalname);
    }
  });

export const upload = multer({storage});