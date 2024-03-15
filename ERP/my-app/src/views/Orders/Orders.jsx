import Header from "../../components/Header/Header";
import NO_Orders from "../../components/NO_Orders/NO_Orders";
import OrderCard from "../../components/OrderCard/OrderCard";

import "./Orders.css";

function Orders(props) {
  const { orders } = props;
  console.log("Orders: ", orders);
  function handleDeleteOrder(Id) {
    props.handleDeleteOrder(Id);
  }
  function displayOrders() {
    return (
      <div className="orders-sections">
        <h1 className="orders-heading">All Orders</h1>
        {!orders || orders.length == 0 ? (
          <NO_Orders />
        ) : (
          orders.map((order) => {
            const { id, createdDate, name, price, imageUrl } = order;
            return (
              <OrderCard
                handleDeleteOrder={handleDeleteOrder}
                orderData={{ id, name, price, imageUrl, createdDate }}
              />
            );
          })
        )}
      </div>
    );
  }
  return (
    <>
      <Header />
      {displayOrders()}
    </>
  );
}

export default Orders;
