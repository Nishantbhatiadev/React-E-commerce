// Orders.jsx
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.allcart.orders);

  return (
    <div className="container mt-5">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="card mb-3">
            <div className="card-header">Order #{order.id}</div>
            <ul className="list-group list-group-flush">
              {order.items.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between">
                  <span>{item.title} x {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="card-footer">
              <strong>Total: ₹{order.totalPrice}</strong>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
