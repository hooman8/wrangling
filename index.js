"use strict";

const express = require("express");
const app = express();
const data = require("./data/data.json");
app.use(express.static("public"));

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("web server listening on port 3000!");
});

// const generateReport = require("./generate-report.js");
// const report = generateReport(data);
// console.log("Number of rows: " + report.numRows);
// console.log("Number of columns: " + report.numColumns);
// console.log("Columns: " + report.columnNames.join(", "));
