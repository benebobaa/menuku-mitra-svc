import express from 'express';
import { authMiddleware } from '../middleware/auth-middleware';
import { MitraController } from '../controller/mitra-controller';


export const apiRouter = express.Router();
apiRouter.use(authMiddleware);

apiRouter.get("/api/mitra", MitraController.get);