import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Companies from "./components/companies/Companies";
import Products from "./components/products/Products";
import Regenerate from "./components/regenerate/Regenerate";
import Value from "./components/value/Value"
import Contact from "./components/contact/Contact"
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";
import About from "./components/sobre/About";

import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      {/* <Companies/> */}
      <About/>
      <Products/>
      <Regenerate/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
