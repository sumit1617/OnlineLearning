const express = require("express");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  addSchedule,
  getSchedule,
  getUserSchedule,
  checkDate,
} = require("../controllers/scheduleControllers");

const router = express.Router();

router
  .route("/admin/schedule/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), addSchedule);

router.route("/schedule").get(getSchedule);
router.route("/userschedule").get(getUserSchedule);
router.route("/dateavailable").post(checkDate);
module.exports = router;
