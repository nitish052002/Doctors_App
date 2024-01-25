const DOCTOR__DB = require("../models/doctors.model");

class DOCTORS_SCHEMA_SERVICES {
  filterBestDoctorsByCity = async (cityName) => {
    console.log(cityName);

    try {
      const data = await DOCTOR__DB.find({
        city: { $regex: new RegExp(cityName, "i") },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getAllDoctors = async () => {
    try {
      const data = await DOCTOR__DB.find({});
      return data;
    } catch (error) {
      return error;
    }
  };
}

module.exports = DOCTORS_SCHEMA_SERVICES;
