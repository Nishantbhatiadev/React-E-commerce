import { useSelector } from "react-redux";

function CartPage() {

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart)

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
                  <div className="row" key={data.id}>
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <img src={data.image} className="w-100" alt={data.title} />
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{data.title}</strong></p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <p className="text-start text-md-center">
                        <strong>{data.price}</strong>
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
                    <span>{totalPrice}</span>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-lg btn-block">
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