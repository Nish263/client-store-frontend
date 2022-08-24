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
    title: "Dress",
    src: [
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_black_maxi_dress-6_713548a5-8408-417a-8045-70c7b36e727b_720x.jpg?v=1660922759",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_red_5_1024x1024.jpg?v=1657846545",
      " https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_white_7_1024x1024.jpg?v=1654652769",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_pink_7_1024x1024.jpg?v=1653634782",
    ],
    description: "The siffon saree, available in different colour",
    price: "200",
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
  {
    _id: "3",
    title: "Shoes",
    src: [
      "https://assets.kogan.com/files/external/Tommy/THF-TMLENARD-WHISY-10_1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_black_9_1024x1024.jpg?v=1653462771",
      " https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_white_7_1024x1024.jpg?v=1654652769",
      "https://cdn.shopify.com/s/files/1/0876/3680/products/octavia_dress_pink_7_1024x1024.jpg?v=1653634782",
    ],
    description: "The siffon saree, available in different colour",
    price: "5000",
    colors: ["red", "pink", "green", "orange"],
  },
  {
    _id: "4",
    title: "Tees",
    src: [
      "https://assets.kogan.com/files/external/Polo/POL-710680785-001-S_1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753",
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
