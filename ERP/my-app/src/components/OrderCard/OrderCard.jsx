import { func } from "prop-types";
import "./OrderCard.css";

function OrderCard(props) {
  const { id, name, price, imageUrl, createdDate } = props.orderData;

  function handleDeleteOrder() {
    props.handleDeleteOrder(id);
  }

  return (
    <div className="container1">
      <img src={imageUrl} className="orders-img" />
      <div className="details-container">
        <p className="order-id">OrderId #{id}</p>
        <p className="ordered-date">Purchased on {createdDate}</p>
        <p className="order-title">{name}</p>
      </div>
      <p className="price-container"> ${price} </p>
      <button onClick={handleDeleteOrder} className="delete-button">
        {" "}
        Delete{" "}
      </button>
    </div>
  );
}

export default OrderCard;
