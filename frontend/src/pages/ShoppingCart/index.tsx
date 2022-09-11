import * as React from 'react';

export interface ShoppingCartProps {
}

export function ShoppingCart (props: ShoppingCartProps) {
  return (
    <section className="cart-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#">
              <div className="table-content table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Images</th>
                      <th className="cart-product-name">Product</th>
                      <th className="product-price">Unit Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">Remove</th>
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
                      <td className="product-quantity">
                        <div className="cart-plus-minus">
                          <input type="text" disabled defaultValue={4} />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                        </div>
                      </td>
                      <td className="product-subtotal">
                        <span className="amount">$266.00</span>
                      </td>
                      <td className="product-remove">
                        <a href="#">
                          <i className="fa fa-times" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="coupon-all">
                    <div className="coupon">
                      <input id="coupon_code" className="input-text" name="coupon_code" placeholder="Coupon code" type="text" />
                      <button className="bt-btn theme-btn-2" name="apply_coupon" type="submit">Apply coupon</button>
                    </div>
                    <div className="coupon2">
                      <a className="bt-btn theme-btn-2" href="/checkout">Submit</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-md-5 ml-auto">
                <div className="cart-page-total">
                  <h2>Cart totals</h2>
                  <ul className="mb-20">
                    <li>Subtotal <span>$266.00</span>
                    </li>
                    <li>Total <span>$266.00</span>
                    </li>
                  </ul>
                  <a className="bt-btn theme-btn-2" href="/checkout">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
