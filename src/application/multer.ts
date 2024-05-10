import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images'); // Destination folder
    },
    filename: (req, file, cb) => {
      // Renaming the file
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
  });

export const upload = multer({storage});