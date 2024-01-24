import { useState } from "react";
import "./form.css";

interface Form {
  name: string;
  contact: number;
  city: string;
  age: number;
  company: string;
  any_exp: false;
  doctor: string;
  complain: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<Form>({
    name: "",
    contact: 0,
    city: "",
    age: 0,
    company: "",
    any_exp: false,
    doctor: "",
    complain: "",
  });

  return (
    <div className="container">
      <div className="form-container">
        <form action="" autoComplete="off" className="form">
          <p className="title">REGISTER</p>
          <div className="form-group">
            <label htmlFor="">
              <input
                className="text-field"
                type="text"
                id="firstname"
                required
              />
              <span>Name</span>
            </label>
            <label htmlFor="">
              <input
                className="text-field"
                type="number"
                id="lastname"
                required
              />
              <span>+91 Contact No</span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="">
              <input
                className="text-field"
                type="text"
                id="firstname"
                required
              />
              <span>City</span>
            </label>

            <label htmlFor="">
              <input
                className="text-field"
                type="number"
                id="lastname"
                required
              />
              <span>Age</span>
            </label>
          </div>

          <label htmlFor="">
            <input className="text-field" type="text" id="email" required />
            <span>Company</span>
          </label>

          <label htmlFor="">
            <input
              className="text-field"
              type="password"
              id="password"
              required
            />
            <span>Chief Complaints</span>
          </label>
          <div className="dropdown-input">
            <select name="" id="" className="dropdown" required>
              <option value="" className="option">
                Yes
              </option>
              <option value="" className="option">
                No
              </option>
            </select>
             
          </div>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="side-content">
        <div className="text-one">Fill Up Form The</div>
        <div className="text-two">To Connect With</div>
        <div className="text-three">Our Best Doctor</div>
      </div>
    </div>
  );
};

export default Form;
