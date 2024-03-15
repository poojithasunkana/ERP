import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
function ProductDetails(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log("product ==> ", data);
  function handleAddOrder() {
    const orderId = new Date().getTime().toString();
    const order = {
      id: orderId,
      name,
      category,
      price,
      imageUrl,
      createdDate: new Date().toLocaleDateString(),
    };
    console.log("My Order", order);
    props.handleAddOrder(order);
    navigate("/orders");
  }
  function goBack() {
    navigate("/products");
  }

  const { id, name, price, imageUrl, category, description } = data;
  return (
    <div className="product-container">
      <div className="product-content">
        <div class="product-card">
          <div class="product-tumb">
            <img src={imageUrl} alt="" />
          </div>
          <div class="product-details">
            <span class="product-catagory"> {category} </span>
            <h4>{name}</h4>
            <p> {description}</p>
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
              <button onClick={handleAddOrder} className="buttonFilled">
                {" "}
                Buy{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="back-button">
          <button onClick={goBack} className="buttonFilled">
            {" "}
            Back{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
