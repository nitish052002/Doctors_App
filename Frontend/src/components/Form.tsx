import { ChangeEvent, useState } from "react";
import "./form.css";
import axios from "axios";
import { base_url } from "../ipConfig.json";
import Loader from "./Loader";
import SubmitLoader from "./SubmitLoader";

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
  _id: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    contact: Number(),
    city: "",
    age: Number(),
    company: "",
    any_exp: "",
    doctor: "",
    complain: "",
  });

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [timer, setTimeOut] = useState<number>();
  const [submitLoader, setSubmiteLoader] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  // function to store form data

  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "city") {
      if (event.target.value.length < 1) {
        setDoctors([]);
        setLoading(false);
      }
      setLoading(true);
    }
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

  const callback = async (city: string) => {
    try {
      if (city) {
        const result = await axios.get(
          `${base_url}?city=${city.toLowerCase()}`
        );
        setLoading(true);
        const data = result.data;
        if (result.status === 200 && data.length) {
          // Successful response (status code 200)F
          console.log(doctors);
          setDoctors(data);
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //  imlementing debouncinf when user will search for city

  const citySearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => {
      callback(event.target.value);
    }, 800);
    setTimeOut(newTimer);
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      !formData.age ||
      formData.any_exp === "" ||
      formData.name === "" ||
      formData.company === "" ||
      !formData.contact ||
      formData.doctor === ""
    ) {
      return null;
    }
    setSubmiteLoader(true);
    setTimeout(() => {
      setFormData({
        name: "",
        contact: Number(),
        city: "",
        age: Number(),
        company: "",
        any_exp: "",
        doctor: "",
        complain: "",
      });
      setSubmiteLoader(false);
      setTooltip(true);
    }, 2000);

    setTimeout(() => {
      setTooltip(false);
    }, 4000);
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
                value={formData.contact > 0 ? formData.contact : ""}
              />
              <span>+91</span>
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
                  citySearchHandler(event);
                  updateFormData(event);
                }}
                value={formData.city}
              />
              <span>City ( e.g Delhi ) </span>
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
                value={formData.age > 0 ? formData.age : ""}
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
              disabled={formData.age < 40}
            >
              <option value="" className="option">
                Any Expreience For Physiotherapy
              </option>
              <option value="yes" className="option">
                Yes
              </option>
              <option value="no" className="option">
                No
              </option>
            </select>
          </div>

          <div className="select-doctortr">
            {isLoading ? (
              <div className="dropdown">
                <Loader />
              </div>
            ) : doctors.length ? (
              <select
                name=""
                id=""
                className="dropdown"
                required
                onChange={(event) => {
                  fun("doctor", event);
                }}
              >
                <option value="" className="" disabled hidden>
                  Select Doctor
                </option>
                {doctors.map((doctor) => {
                  return (
                    <option
                      value={doctor.name}
                      className="option"
                      key={doctor._id}
                    >
                      Dr.{doctor.name}
                    </option>
                  );
                })}
              </select>
            ) : (
              <div className="dropdown">No Doctors Found</div>
            )}
          </div>

          <button className="submit" onClick={onSubmit}>
            {submitLoader ? <SubmitLoader /> : "Submit"}
          </button>
          <div className={tooltip ? "success active" : "success"}>Success</div>
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
