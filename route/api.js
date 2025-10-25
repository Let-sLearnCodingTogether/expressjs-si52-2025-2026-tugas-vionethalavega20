import express from "express"
import * as kontenController from "../controllers/kontenController.js"
import * as authController from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router()

api.post('/register', authController.register);
api.post('/login', authController.login);
api.get('/profile', protect, authController.getProfile);

api.get('/konten', protect, kontenController.listKonten)
api.post('/konten', protect, kontenController.createNewKonten)
api.put('/konten/:id', protect, kontenController.updateKonten)
api.delete('/konten/:id', protect, kontenController.deleteKonten)


export default api;