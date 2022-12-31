import express, { Router } from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotelcontroller.js";

import { verifyIsAdmin } from "../utils/verifytoken.js";

const router = express.Router();
// CREATE
router.post("/", verifyIsAdmin, createHotel);

// UPDATE
router.put("/:id", verifyIsAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyIsAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
