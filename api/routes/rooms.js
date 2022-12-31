import express, { Router } from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomcontroller.js";
import { verifyIsAdmin } from "../utils/verifytoken.js";

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyIsAdmin, createRoom);

// UPDATE
router.put("/:id", verifyIsAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// DELETE
router.delete("/:id/:hotelid", verifyIsAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRooms);

export default router;
