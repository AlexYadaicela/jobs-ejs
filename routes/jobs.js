const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  addNewJob,
  createNewJob,
  getJobById,
  updateJobById,
  deleteJobById,
} = require("../controllers/jobs.js");

router.route("/").get(getAllJobs).post(addNewJob);
router.route("/new").get(createNewJob);
router.route("/edit/:id").get(getJobById);
router.route("/update/:id").post(updateJobById);
router.route("/delete/:id").delete(deleteJobById);

module.exports = router;
