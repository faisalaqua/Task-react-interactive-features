import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
//styling
import "./App.css";
import DetailItem from "./components/DetailItem";
import { useState } from "react";

function App() {
  const [detail, setDetail] = useState({
    id: 1,
    name: "Chocolate Chip Cookie",
    price: 10,
    description: "The mother of Goodness",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
  });
  return (
    <div>
      <Home />
      <ProductList setDetail={setDetail} />
      <DetailItem detail={detail} />
    </div>
  );
}

export default App;
