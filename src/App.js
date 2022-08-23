import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import KidClothing from "./pages/kids/KidClothing";
import MenClothing from "./pages/men/MenClothing";
import WomenClothing from "./pages/women/WomenClothing";
import Cart from "./pages/cart/Cart";
import ProductLandingPage from "./component/products/ProductLandingPage";

const products = [
  {
    _id: "1",
    title: "Saree",
    src: [
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_red_5_1024x1024.jpg?v=1657846545",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_black_9_1024x1024.jpg?v=1653462771",
      " https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_white_7_1024x1024.jpg?v=1654652769",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_pink_7_1024x1024.jpg?v=1653634782",
    ],
    description: "The siffon saree, available in different colour",
    price: "100",
    colors: ["red", "pink", "green", "orange"],
  },
  {
    _id: "2",
    title: "Sandal",
    src: [
      "https://img.ltwebstatic.com/images3_pi/2021/12/14/163948444510e31aeb2f4a04be1f4f9fee1ed5bde4_thumbnail_900x.webp",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_black_9_1024x1024.jpg?v=1653462771",
      " https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_white_7_1024x1024.jpg?v=1654652769",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_pink_7_1024x1024.jpg?v=1653634782",
    ],
    description: "The siffon saree, available in different colour",
    price: "1000",
    colors: ["red", "pink", "green", "orange"],
  },
];
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/kids" element={<KidClothing products={products} />} />
          <Route
            path="/womens"
            element={<WomenClothing products={products} />}
          />
          <Route path="/mens" element={<MenClothing products={products} />} />
          <Route path="/cart" element={<Cart products={products} />} />
          <Route
            path="/products-view/:_id"
            element={<ProductLandingPage products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
