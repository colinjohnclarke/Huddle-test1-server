const express = require("express");

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
    // // Assuming you have a 'meter_readings' table with 'reading_value' and 'date' columns
    // const query = 'INSERT INTO meter_readings (reading_value, date) VALUES ($1, $2)';
    // const values = [readingValue, date];
    // await pool.query(query, values);
    // res.status(201).json({ message: 'Meter reading added successfully' });

    console.log({ readingValue, date });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Error executing query" });
  }
};

const getAllMeterReadings = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ error: "id is required" });
  }

  try {
    // code to fetch from DB
  } catch (error) {
    console.error("Meter Readings cannot be found in DB");
    res.status(500).json({ error: "Error executing query" });
  }
};

module.exports = { addNewMeterReading, getAllMeterReadings };
