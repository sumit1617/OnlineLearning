const express = require("express");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  createCourse,
  getCourseDetails,
  getCourseName,
} = require("../controllers/courseControllers");

const router = express.Router();

router
  .route("/admin/course/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createCourse);

router.route("/course").get(getCourseDetails);

router.route("/course/:id").get(getCourseName);

module.exports = router;
