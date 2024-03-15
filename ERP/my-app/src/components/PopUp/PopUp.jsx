import { func } from "prop-types";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import "./index.css";

function PopUp(props) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setCategory] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [productDescription, setDescription] = useState("");
  const isEditing = props.isEditing;

  useEffect(() => {
    function init() {
      console.log(
        "Iniit",
        props.productData,
        props.productData != null,
        props.productProductData != undefined
      );
      if (props.productData != null) {
        const { name, description, category, price, imageUrl } =
          props.productData;
        setProductName(name);
        setDescription(description);
        setCategory(category);
        setProductPrice(price);
        setimageUrl(imageUrl);
      }
    }
    init();
  }, []);

  function editProduct(product) {
    props.editProduct(product);
  }

  function handleSubmit() {
    let productId=  null;
    if(props.productData){
      const { id } = props.productData;
      productId = id;
    }
  
    const product = {
      id: isEditing ? productId : uuidv4(),
      name: productName,
      category: productCategory,
      price: productPrice,
      imageUrl: imageUrl,
      description: productDescription,
    };
    if (isEditing){
      console.log("Edit Product : ", product);
      editProduct(product);
    }
    else{
      console.log("Add product  : ", product)
      props.addProduct(product);
    }
    props.closePopup();
  }

  function DeleteProduct() {
    props.handleDeleteProduct(props.productData.id);
  }

  function closePopup() {
    props.closePopup();
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={closePopup}>
          Cancle
        </button>
        <div className="container">
          <form>
            <h2 className="form-heading">Product Details</h2>
            <input
              type="text"
              name="name"
              placeholder=" ProductName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
              autoComplete="on"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={productCategory}
              onChange={(e) => setCategory(e.target.value)}
              required
              autoComplete="on"
            />
            <input
              type="text"
              name="description"
              placeholder="description"
              value={productDescription}
              onChange={(e) => setDescription(e.target.value)}
              required
              autoComplete="on"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
              autoComplete="on"
            />
            <input
              type="url"
              name="imageUrl"
              placeholder="imageURL"
              value={imageUrl}
              onChange={(e) => setimageUrl(e.target.value)}
              required
              autoComplete="on"
            />
            <div className="popupButtons">
              <button className="buttonFilled" onClick={handleSubmit}>
                Submit
              </button>
              {isEditing && (
                <button className="delete-btn" onClick={DeleteProduct}>
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
