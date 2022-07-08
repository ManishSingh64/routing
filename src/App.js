import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { Products } from "./Components/Products";
import { Contact } from "./Components/Contact";
import { Users } from "./Components/Users";
import { Login } from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { ProductsDetails } from "./Components/ProductsDetails";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path='/products/:id' element={<ProductsDetails/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Login/> */}
      {/* <Users/> */}
    </div>
  );
}

export default App;
