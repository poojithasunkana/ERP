import React, { useState } from "react";
import "./products.css";
import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";
import { func } from "prop-types";

function Products(props) {
  const { products } = props;
  console.log("My products : ", products);
  function handleAddProduct() {
    props.handleAddProduct();
  }
  function handleEditProduct(product) {
    props.handleEditProduct(product);
  }

  function handleDeleteProduct(id) {
    props.handleDeleteProduct(id);
  }

  function handleAddOrder(order) {
    props.handleAddOrder(order);
  }

  function displayProducts() {
    return (
      <div className="product-sections">
        <div className="products-heading-container">
          <h1 className="products-heading">All Products</h1>
          <div className="add-product-btn">
            <button onClick={handleAddProduct} className="buttonFilled">
              + Add Product
            </button>
          </div>
        </div>

        <ul className="products-list">
          {products?.map((product) => {
            const { id, name, price, description, category, imageUrl } =
              product;
            return (
              <Product
                key={product.id}
                productData={{
                  id,
                  price,
                  description,
                  category,
                  name,
                  imageUrl,
                }}
                handleDeleteProduct={handleDeleteProduct}
                handleAddOrder={handleAddOrder}
                handleEditProduct={handleEditProduct}
              />
            );
          })}
        </ul>
      </div>
    );
  }
  return (
    <div>
      <Header />
      {displayProducts()}
    </div>
  );
}

export default Products;
