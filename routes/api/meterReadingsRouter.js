const express = require("express");

const meterReadings = require("../../controllers/newMeterReadingsController");

const router = express.Router();

router
  .route("/")
  .get(meterReadings.getAllMeterReadings)
  .post(meterReadings.addNewMeterReading);

module.exports = router;
