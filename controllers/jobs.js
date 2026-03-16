const Job = require("../models/Job.js");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.id });
  res.render("jobs", { jobs });
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
  const job = await Job.findOne({
    _id: req.params.id,
    createdBy: req.user.id,
  });
  res.render("editJob", { job });
};

const updateJobById = async (req, res) => {
  await Job.findOneAndUpdate(
    {
      _id: req.params.id,
      createdBy: req.user._id,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );
  res.redirect("/jobs");
  // res.status(200).json({ message: `updating ${req.params.id} job` });
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
