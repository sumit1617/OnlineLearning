const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: false,
  },
  description: {
    type: String,
    required: true,
    min: 8,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
