require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3600;

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/addNewMeterReading", require("./routes/api/meterReadingsRouter"));

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});
