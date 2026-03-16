const Job = require("../models/Job.js");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.id });
  console.log(jobs);
  res.render("jobs", { jobs });
  //   res.status(200).json({ message: "getting all Jobs" });
};

const addNewJob = async (req, res) => {
  const { company, position, status } = req.body;
  await Job.create({
    company,
    position,
    status,
    createdBy: req.user.id,
  });
  res.redirect("/jobs");
};
const getFormToAddJob = async (req, res) => {
  res.render("job", { job: null });
};
const getJobById = async (req, res) => {
  res.status(200).json({ message: `getting ${req.params.id} job` });
};
const updateJobById = async (req, res) => {
  res.status(200).json({ message: `updating ${req.params.id} job` });
};

const deleteJobById = async (req, res) => {
  res.status(200).json({ message: `deleting ${req.params.id} job` });
};

module.exports = {
  getAllJobs,
  addNewJob,
  getFormToAddJob,
  getJobById,
  updateJobById,
  deleteJobById,
};
