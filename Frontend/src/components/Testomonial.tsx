import Card from "./Card";
import "./testomonial.css";
import { data } from "../db/user.json"
const Testomonial = () => {
  return (
    <div className="testomonial-container">
      <div className="title">Testomonial</div>

      <div className="testomonial__content">
        {
          data.map(data => <Card Data={data} />)
        }
      </div>
    </div>
  );
};

export default Testomonial;
