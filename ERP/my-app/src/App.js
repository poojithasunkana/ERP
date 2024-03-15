import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import "./index.css";
import Home from "./views/Home/home";
import NotFound from "./views/not-found";
import Products from "./views/Products/products";
import PopUp from "./components/PopUp/PopUp";
import Orders from "./views/Orders/Orders";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { func } from "prop-types";
import Data from "./tempData";

let tempData = Data;

const App = () => {
  const [showPop, setShowPop] = useState(false);
  const [products, setProducts] = useState(null);
  const [orders, setOrders] = useState(null);

  function handleAddProduct() {
    setShowPop(true);
  }

  function addProduct(product) {
    let newProducts = [product, ...products];
    localStorage.setItem("products", JSON.stringify(newProducts));
    setProducts(newProducts);
  }

  function addOrder(order) {
    console.log("Add order: ", order);
    let newOrders = null;
    if (orders == null) {
      newOrders = [order];
    } else {
      newOrders = [order, ...orders];
    }

    localStorage.setItem("orders", JSON.stringify(newOrders));
    setOrders(newOrders);
  }

  function handleDeleteProduct(Id) {
    console.log("ID", Id);
    const filteredProducts = products.filter((product) => {
      if (product.id == Id) return false;
      return true;
    });
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    console.log("Filtered Products: ", filteredProducts);
    setProducts(filteredProducts);
  }

  function handleDeleteOrder(Id) {
    const filteredOrders = orders.filter((order) => {
      if (order.id == Id) return false;
      return true;
    });
    console.log("Filtered orders");
    localStorage.setItem("orders", JSON.stringify(filteredOrders));
    setOrders(filteredOrders);
  }

  function handleEditProduct(product) {
    console.log("edit product: ", product);
    const modifiedProducts = products.map((currentProduct) => {
      if (currentProduct.id == product.id) {
        return product;
      } else {
        return currentProduct;
      }
    });
    localStorage.setItem("products", JSON.stringify(modifiedProducts));
    setProducts(modifiedProducts);
  }

  function closePopup() {
    setShowPop(false);
  }
  useEffect(() => {
    function getProducts() {
      const products = localStorage.getItem("products");
      console.log("useeffect : ", products);

      if (!products) {
        setProducts(tempData);
        localStorage.setItem("products", JSON.stringify(tempData));
      } else {
        console.log("else");
        setProducts(JSON.parse(products));
      }
    }
    function getOrders() {
      const orders = localStorage.getItem("orders");
      if (orders) {
        setOrders(JSON.parse(orders));
      }
    }
    getProducts();
    getOrders();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} orders={orders} />}
        />
        <Route
          path="/products"
          element={
            <Products
              products={products}
              handleAddProduct={handleAddProduct}
              handleEditProduct={handleEditProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleClosePopup={closePopup}
              handleAddOrder={addOrder}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <Orders
              orders={orders}
              handleAddOrder={addOrder}
              handleDeleteOrder={handleDeleteOrder}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails orders={orders} handleAddOrder={addOrder} />}
        />
      </Routes>
      {showPop && (
        <PopUp
          addProduct={addProduct}
          closePopup={closePopup}
        />
      )}
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
