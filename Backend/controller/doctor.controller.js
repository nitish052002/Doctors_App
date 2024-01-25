const DOCTOR_SERVICES = require("../services/doctor.service")
export const getBestDoctorController = (req, res) => {
   const result =  req.query
   console.log(result)
  res.status(200).send("Hello");
};
