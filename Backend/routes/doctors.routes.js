const { getBestDoctorController } = require("../controller/doctor.controller")

const router = require("express").Router()


router.get("/",getBestDoctorController)
 

