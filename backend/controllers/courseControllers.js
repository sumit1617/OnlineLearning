const Course = require("../models/courseModel");
const ErrorHandler = require("../utils/errorHandle");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Create Course
exports.createCourse = catchAsyncErrors(async (req, res, next) => {
  const { name, description } = req.body;

  const course = await Course.create({
    name,
    description,
  });

  res.status(201).json({
    success: true,
    course,
  });
});

// Get the Course Details
exports.getCourseDetails = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.find();

  res.status(201).json({
    success: true,
    course,
  });
});

// Get the course name
exports.getCourseName = catchAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(
      new ErrorHandler(`Course Does not exist ${req.params.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
    course,
  });
});
