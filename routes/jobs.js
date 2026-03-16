const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  addNewJob,
  getFormToAddJob,
  getJobById,
  updateJobById,
  deleteJobById,
} = require("../controllers/jobs.js");

router.route("/").get(getAllJobs).post(addNewJob);
router.route("/new").get(getFormToAddJob);
router.route("/edit/:id").get(getJobById);
router.route("/update/:id").post(updateJobById);
router.route("/delete/:id").post(deleteJobById);

module.exports = router;
