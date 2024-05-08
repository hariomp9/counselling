const express = require("express");

const router = express.Router();
const {
  createDistrict,
  getAllDistricts,
  getDistrictById,
} = require("../Controller/DistrictController");

router.post("/create", createDistrict);
router.get("/all", getAllDistricts);
router.get("/:id", getDistrictById);

module.exports = router;
