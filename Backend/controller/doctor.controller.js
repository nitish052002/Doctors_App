const DOCTOR_SERVICES = require("../services/doctor.service");
const DOCTOR_SERVICES_INSTANCE = new DOCTOR_SERVICES();
const getBestDoctorController = async (req, res) => {
  const city = req.query.city;
  const data = await DOCTOR_SERVICES_INSTANCE.filterBestDoctorsByCity(city);
  res.send(data).status(200);
};

const getDoctorListController = async (req, res) => {
  const data = await DOCTOR_SERVICES_INSTANCE.getAllDoctors();
  res.send(data).status(200);
};

// console.log(data)
module.exports ={ getBestDoctorController,getDoctorListController};
