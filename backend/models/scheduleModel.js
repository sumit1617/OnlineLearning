const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  date: {
    type: Date,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
