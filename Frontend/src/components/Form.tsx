import { ChangeEvent, useEffect, useState } from "react";
import "./form.css";
import axios from "axios";
import { base_url } from "../ipConfig.json"


interface Form {
  name: string;
  contact: number;
  city: string;
  age: number;
  company: string;
  any_exp: string;
  doctor: string;
  complain: string;
}



interface Doctor {
  name: string;
  city: string;
  _id: string
}


const Form: React.FC = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    contact: 0,
    city: "",
    age: 0,
    company: "",
    any_exp: "",
    doctor: "",
    complain: "",
  });

  const [doctors, setDoctors] = useState<Doctor[]>([]);


  useEffect(() => {
    const getDocotorsListByCity = async () => {
      try {
        const result = await axios.get(`${base_url}?city=${formData.city.toLowerCase()}`)
        const data = result.data
        setDoctors(data)
        console.log("RESULT   ", doctors)
        // setDoctors(data)
      } catch (error) {
        console.log(error)
      }
    }

    getDocotorsListByCity()
  }, [formData.city])

  // function to store form data

  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const fun = (fieldname: string, event: ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [fieldname]: event.target.value,
    });

    return;
  };



  return (
    <div className="container" id="form">
      <div className="form-container">
        <form autoComplete="off" className="form">
          <p className="title">REGISTER</p>
          <div className="form-group">
            <label htmlFor="">
              <input
                className="text-field"
                type="text"
                name="name"
                required
                onChange={updateFormData}
                value={formData.name}
              />
              <span>Name</span>
            </label>
            <label htmlFor="">
              <input
                className="text-field"
                type="number"
                name="contact"
                required
                onChange={updateFormData}
                value={formData.contact}
              />
              <span>+91 Contact No</span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="">
              <input
                className="text-field"
                type="text"
                name="city"
                required
                onChange={(event) => {
                  updateFormData(event);

                }}
                value={formData.city}
              />
              <span>City</span>
            </label>

            <label htmlFor="">
              <input
                className="text-field"
                type="number"
                name="age"
                min={10}
                max={90}
                required
                onChange={updateFormData}
                value={formData.age}
              />
              <span>Age</span>
            </label>
          </div>

          <label htmlFor="">
            <input
              className="text-field"
              type="text"
              name="company"
              required
              onChange={updateFormData}
              value={formData.company}
            />
            <span>Company</span>
          </label>

          <label htmlFor="">
            <input
              className="text-field"
              type="text"
              name="complain"
              required
              onChange={updateFormData}
              value={formData.complain}
            />
            <span>Chief Complaints</span>
          </label>
          <div className="dropdown-input">
            <select
              name=""
              id=""
              className="dropdown"
              required
              onChange={(event) => {
                fun("any_exp", event);
              }}
            >
              <option value="" className="option" selected disabled hidden>
                Any Relevant Expreience
              </option>
              <option value="yes" className="option" >
                Yes
              </option>
              <option value="no" className="option">
                No
              </option>
            </select>
          </div>

          <div className="select-doctortr">
            <select
              name=""
              id=""
              className="dropdown"
              required
              onChange={(event) => {
                fun("doctor", event);
              }}
            >
              <option value="" className="option" selected disabled hidden >
                Select Doctor
              </option>
              {doctors.map((doctor) => {
                return (
                  <option
                    value={doctor.name}
                    className="option"
                    key={doctor._id}
                  >
                    {doctor.name}
                  </option>
                );
              })}
            </select>
          </div>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="side-content">
        <div className="text-one">Fill Up Form </div>
        <div className="text-two">To Connect With</div>
        <div className="text-three">Our Best Doctor</div>
      </div>
    </div>
  );
};

export default Form;
