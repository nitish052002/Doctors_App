import "./App.css";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Testomonial from "./components/Testomonial";

function App() {
  return (
    <div className="app">
      <div className="hero__section">
        <Hero />
      </div>
      <main>
        <Form />
      </main>
      <div className="testomonial__section">
        <Testomonial />
      </div>
    </div>
  );
}

export default App;
