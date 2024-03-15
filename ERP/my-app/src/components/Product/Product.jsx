import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
function Product(props) {
  const [isEditing, setIsEditing] = useState(false);

  const productData = props.productData;
  const { id, name, category, description, price, imageUrl } =
    props.productData;
  console.log("id: p ", id);

  function handleEditProduct() {
    setIsEditing(true);
  }

  function editProduct(product) {
    props.handleEditProduct(product);
  }

  function deleteProduct(id) {
    props.handleDeleteProduct(id);
  }

  function closePopup() {
    setIsEditing(false);
  }

  return (
    <div class="product-card">
      <div class="product-tumb">
        <img src={imageUrl} alt="" />
      </div>
      <div class="product-details">
        <span class="product-catagory"> {category} </span>
        <h4 className="title">{name}</h4>
        <p className="description"> {description}</p>
        <div class="product-bottom-details">
          <div class="product-price">${price}</div>
          <div class="product-links">
            <a href="">
              <i class="fa fa-heart"></i>
            </a>
            <a href="">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
        <div className="product-buttons">
          <Link to={`/product/${id}`} state={productData}>
            <button className="buttonFilled">View</button>
          </Link>
          <button className="buttonFilled" onClick={handleEditProduct}>
            {" "}
            Edit{" "}
          </button>
        </div>
      </div>
      {isEditing && (
        <PopUp
          isEditing={isEditing}
          closePopup={closePopup}
          editProduct={editProduct}
          handleDeleteProduct={deleteProduct}
          productData={productData}
        />
      )}
    </div>
  );
}

export default Product;
