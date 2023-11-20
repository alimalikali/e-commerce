import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import SpecificProduct from "./components/SpecificProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="App bg-slate-950  h-max ">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/products" element={<AddProduct />} />
            <Route path="/products/:id" element={<SpecificProduct/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
