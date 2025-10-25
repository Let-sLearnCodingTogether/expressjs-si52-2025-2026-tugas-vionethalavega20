import express from "express"
import * as kontenController from "../controllers/kontenController.js"
import * as authController from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const api = express.Router()

api.get('/konten', kontenController.listKonten)
api.post('/konten', kontenController.createNewKonten)
api.put('/konten/:id', kontenController.updateKonten)
api.delete('/konten/:id', kontenController.deleteKonten)

api.post('/register', authController.register);
api.post('/login', authController.login);


export default api;