import * as React from 'react';

export interface IOrderSuccessProps {
}

export function OrderSuccess (props: IOrderSuccessProps) {
  return (
    <section className="cart-area pt-100 pb-100">
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <form>
                <div className="table-content table-responsive">
                    <table className="table">
                    <thead>
                        <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-1.jpg" alt="cart" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Rounded Plam Hat</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$66.50</span>
                        </td>
                        <td className="product-price">
                            <span className="amount">4</span>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$266.00</span>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="cart-page-total">
                    <h2>Cart totals</h2>
                    <ul className="mb-20">
                    <li>Subtotal <span>${/* */}266.00</span>
                    </li>
                    <li>Total <span>${/* */}266.00</span>
                    </li>
                    </ul>
                </div>
                </form>
            </div>
            <div className="col-lg-6 order-success">
                <div className="row">
                <div className="col-md-6">
                    <h5>Summery :</h5>
                    <p>
                    <b>Order ID:</b> {/* */}28409VUE42682
                    </p>
                    <p>
                    <b>Order Date:</b> {/* */}September 11, 2022
                    </p>
                    <p>
                    <b>Order Total:</b> ${/* */}266.00
                    </p>
                </div>
                <div className="col-md-6">
                    <h5>Shipping Address</h5>
                    <p className="text-capitalize">Sabuj Hasan Sarker</p>
                    <p>Jatrabari,Dhaka-1204 Bangladesh</p>
                    <p>Contact No.{/* */} {/* */}987456321</p>
                </div>
                <div className="col-12 mt-4">
                    <h5>Payment Method</h5>
                    <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.</p>
                    <div className="bg-light p-3 mt-4 text-center">
                    <h5>Expected Date Of Delivery</h5>
                    <h2>September 18, 2022</h2>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
  );
}
