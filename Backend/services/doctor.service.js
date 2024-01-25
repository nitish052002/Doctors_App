const DOCTOR__DB = require("../models/doctors.model");

export class DOCTORS_SCHEMA_SERVICES {
  filterBestDoctorsByCity = (cityName) => {
    try {
      const data = DOCTOR__DB.find({});
    } catch (error) {}
  };
}
