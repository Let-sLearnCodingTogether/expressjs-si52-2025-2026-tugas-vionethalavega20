import express from "express"
import * as kontenController from "../controllers/kontenController.js"

const api = express.Router()

api.get('/konten', kontenController.listKonten)
api.post('/konten', kontenController.createNewKonten)
api.put('/konten/:id', kontenController.updateKonten)
api.delete('/konten/:id', kontenController.deleteKonten)

export default api;