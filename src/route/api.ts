import express from 'express';
import { authMiddleware } from '../middleware/auth-middleware';
import { MitraController } from '../controller/mitra-controller';
import { AddressController } from '../controller/address-controller';


export const apiRouter = express.Router();
apiRouter.use(authMiddleware);

apiRouter.get("/api/mitra", MitraController.get);
apiRouter.patch("/api/mitra", MitraController.update);
apiRouter.post("/api/image-upload", MitraController.uploadImage);

apiRouter.post("/api/address", AddressController.create);
apiRouter.get("/api/address", AddressController.get);