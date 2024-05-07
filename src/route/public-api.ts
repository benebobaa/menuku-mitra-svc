import express from 'express';
import { MitraController } from '../controller/mitra-controller';
import {upload} from "../application/multer";


export const publicRouter =  express.Router();
publicRouter.post("/api/login", MitraController.login);
publicRouter.post("/api/register",upload.single('image_url'), MitraController.register);
