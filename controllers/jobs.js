const getAllJobs = async (req, res) => {
  res.status(200).json({ message: "getting all Jobs" });
};

const addNewJob = async (req, res) => {
  res.status(200).json({ message: "Adding new Job" });
};
const createNewJob = async (req, res) => {
  res.status(200).json({ message: "Creating new job" });
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
  createNewJob,
  getJobById,
  updateJobById,
  deleteJobById,
};
