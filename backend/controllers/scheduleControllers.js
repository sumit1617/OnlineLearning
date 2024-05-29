const Schedule = require("../models/scheduleModel");
const ErrorHandler = require("../utils/errorHandle");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Create Schedule
exports.addSchedule = catchAsyncErrors(async (req, res, next) => {
  const { course, date, instructor } = req.body;

  const schedule = await Schedule.create({
    course,
    date,
    instructor,
  });

  res.status(201).json({
    success: true,
    schedule,
  });
});

// Get Schedule
exports.getSchedule = catchAsyncErrors(async (req, res, next) => {
  const course = req.query.id;

  if (!course) {
    return next(new ErrorHandler(`Course Not Found`, 400));
  }

  const schedule = await Schedule.find({ course: course });

  res.status(200).json({
    success: true,
    schedule,
  });
});

// Get User Schedule
exports.getUserSchedule = catchAsyncErrors(async (req, res, next) => {
  const instructor = req.query.instructor;

  if (!instructor) {
    return next(new ErrorHandler(`User Not Found`, 400));
  }

  const schedule = await Schedule.find({ instructor: instructor });

  res.status(200).json({
    success: true,
    schedule,
  });
});

// Check Date Available
exports.checkDate = catchAsyncErrors(async (req, res, next) => {
  const { instructor, date } = req.body;

  const existingSchedule = await Schedule.findOne({
    instructor: instructor,
    date: new Date(date),
  });

  if (existingSchedule) {
    return next(new ErrorHandler(`Intstructor is Not available`, 400));
  }

  res.status(200).json({
    success: true,
    message: "Intstructor is available",
  });
});
