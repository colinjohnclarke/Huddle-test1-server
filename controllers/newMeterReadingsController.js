const express = require("express");
const dummydata = require("../data/dummyResponseData");

const addNewMeterReading = async (req, res) => {
  const { readingValue, date, type, id } = req.body;

  if (!readingValue || !date || !id || !type) {
    return res
      .status(400)
      .json({ error: "Reading value, date, id and type are required" });
  }

  if (isNaN(readingValue)) {
    return res.status(400).json({ error: "Reading value must be a number" });
  }

  if (isNaN(Date.parse(date))) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  try {
    // POSTGRES DB QUERY

    dummydata.push({ id, date, readingValue, type });
    const findHouseWithId = dummydata.filter((house) => house.id === id);

    // findHouseWithId.push({ id, date, readingValue, type });
    console.log(findHouseWithId);

    res.status(200).json({
      data: findHouseWithId,
      message: " Data updated sucessfully " + id,
    });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Error executing query" });
  }
};

const getAllMeterReadings = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: "id is required" });
  }

  try {
    // Mocking data as I cannot connect to POSTGRES
    res.status(200).json({
      data: dummydata,
      message: "All Meter reading datas for ID " + id,
    });
  } catch (error) {
    console.error("Meter Readings cannot be found in DB");
    res.status(500).json({
      error: "Error executing query- Meter Readings cannot be found in DB",
    });
  }
};

module.exports = { addNewMeterReading, getAllMeterReadings };
