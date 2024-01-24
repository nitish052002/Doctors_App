import Card from "./Card";
import "./testomonial.css"
const Testomonial = () => {
  return <div className="testomonial-container">
    <div className="title">
      Testomonial
    </div>

    <div className="testomonial__content">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>

  </div>;
};

export default Testomonial;
