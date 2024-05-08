import express from 'express';
import {authMiddleware} from '../middleware/auth-middleware';
import {MitraController} from '../controller/mitra-controller';
import {AddressController} from '../controller/address-controller';
import {MenuController} from "../controller/menu-controller";
import {upload} from "../application/multer";
import {SuperCategoryController} from "../controller/super-category-controller";
import {CategoryController} from "../controller/category-controller";


export const apiRouter = express.Router();
apiRouter.use(authMiddleware);

apiRouter.get('/api/super-categories', SuperCategoryController.list)
apiRouter.post('/api/super-categories', SuperCategoryController.create)

apiRouter.get('/api/categories',CategoryController.list)
apiRouter.post('/api/categories', CategoryController.create)

apiRouter.get("/api/mitra", MitraController.get);
apiRouter.patch("/api/mitra", upload.single('image_url'), MitraController.update);
apiRouter.post("/api/image-upload", MitraController.uploadImage);

apiRouter.post("/api/address", AddressController.create);
apiRouter.get("/api/address", AddressController.get);

apiRouter.post("/api/menu", upload.single('image_url'), MenuController.create);
apiRouter.get("/api/menu", MenuController.list);
apiRouter.put("/api/menu/:menuId(\\d+)", upload.single('image_url'), MenuController.update);
