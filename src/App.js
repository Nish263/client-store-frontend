import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import KidClothing from "./pages/kids/KidClothing";
import MenClothing from "./pages/men/MenClothing";
import WomenClothing from "./pages/women/WomenClothing";
import Cart from "./pages/cart/Cart";
import ProductLandingPage from "./component/products/ProductLandingPage";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<KidClothing />} />
          <Route path="/womens" element={<WomenClothing />} />
          <Route path="/mens" element={<MenClothing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products-view/:_id" element={<ProductLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
