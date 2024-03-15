import "./index.css";
function Banner(props) {
  const { products, orders } = props;
  console.log(
    "In banner : ",
    products,
    products != null && products.lenght > 0
  );
  return (
    <div className="home-banner">
      <div className="products-container">
        <div className="products-details">
          <h1 className="heading">Total Products</h1>
          <p className="count">
            {" "}
            {products && products.length > 0 ? products.length : 0}
          </p>
        </div>
      </div>
      <div className="orders-container">
        <div className="products-details">
          <h1 className="heading">Total Orders</h1>
          <p className="count">
            {orders && orders.length > 0 ? orders.length : 0}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
