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
      <main className="form-section">
        <Form />
      </main>
      <div className="testomonial__section">
        <Testomonial />
      </div>
    </div>
  );
}

export default App;
