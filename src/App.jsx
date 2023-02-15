import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { Home } from "./components/Home";

import { api } from "./services/api";

function App() {
  const localCart = localStorage.getItem("@cartBurger");
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);

  const [currentSale, setCurrentSale] = useState(
    localCart ? JSON.parse(localCart) : []
  );
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("@cartBurger", JSON.stringify(currentSale));
  }, [currentSale]);

  useEffect(() => {
    async function loadBurgerData() {
      try {
        const response = await api.get("/products");

        setProducts(response.data);
        setProducts2(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadBurgerData();
  }, []);

  const addToCart = (event) => {
    const button = event.target;

    const data = products.find(
      (product) => product.id * 1 === Number(button.id) * 1
    );
    if (data) {
      const validate = currentSale.filter(
        (element) => data.id * 1 === element.id * 1
      );

      if (validate < 1) {
        setCurrentSale([...currentSale, data]);
        toast.success("Item adicionado com sucesso!");
      } else {
        toast.error("Item já foi adicionado");
      }
    }
  };

  const removeItemCart = (productId) => {
    const newProductList = currentSale.filter(
      (product) => product.id !== productId
    );
    setCurrentSale(newProductList);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchProduct = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(filteredProducts.toLowerCase())
    );
    setProducts2(filtered);
  };

  return (
    <div className="App">
      <Home
        products2={products2}
        addToCart={addToCart}
        currentSale={currentSale}
        removeItemCart={removeItemCart}
        searchProduct={searchProduct}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
