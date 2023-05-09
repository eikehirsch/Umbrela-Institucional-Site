import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Companies from "./components/companies/Companies";
import Products from "./components/products/Products";
import Regenerate from "./components/regenerate/Regenerate";
import Value from "./components/value/Value"

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
      <Products/>
      <Regenerate/>
      <Value/>
    </div>
  );
}

export default App;
