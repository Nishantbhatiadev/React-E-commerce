import { useSelector, useDispatch } from "react-redux";
import { addQuantity, removeFromCart, minusQuantity } from "../feature/CartSlice";

function CartPage() {

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart)
  const dispatch = useDispatch();

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - {totalQuantity} items</h5>
              </div>
              <div className="card-body">
                {cart.map((data) => (
                  <div className="row align-items-center mb-3" key={data.id}>
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <img src={data.image} className="w-100" alt={data.title} />
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{data.title}</strong></p>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => dispatch(minusQuantity(data.id))}
                        >−</button>
                        <span>{data.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => dispatch(addQuantity(data.id))}
                        >+</button>
                      </div>
                      <button className="btn btn-danger btn-sm mt-2" onClick={() => dispatch(removeFromCart(data))}>
                        Remove
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <p className="text-start text-md-center">
                        <strong>₹{data.price * data.quantity}</strong>
                      </p>
                    </div>
                  </div>
                ))}
                <hr className="my-4" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Quantity
                    <span>{totalQuantity}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Price
                    <span>₹{totalPrice}</span>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-lg btn-block mt-3">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default CartPage;