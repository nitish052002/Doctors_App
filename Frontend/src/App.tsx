import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testomonial from "./components/Testomonial";


function App() {
  return (
    <div className="app">
       <Header/>
      <div className="hero__section">
        <Hero />
      </div>
      <div className="form-section">
        <Form />
      </div>
      <div className="testomonial__section">
        <Testomonial />
      </div>
    </div>
  );
}

export default App;
