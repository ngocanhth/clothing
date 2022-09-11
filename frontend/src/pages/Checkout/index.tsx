import * as React from 'react';

export interface ICheckoutProps {
}

export function Checkout (props: ICheckoutProps) {
  return (
    <>
        <section className="coupon-area pt-100 pb-30">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="coupon-accordion">
                    <h3>Returning customer?{/* */} <span id="showlogin">Click here to login</span>
                    </h3>
                    <div className="custom-acc ">
                        <div id="checkout-login" className="coupon-content ">
                        <div className="coupon-info">
                            <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                            <form>
                            <p className="form-row-first">
                                <label htmlFor="email">Email Address{/* */} <span className="required">*</span>
                                </label>
                                <input type="string" id="email" name="email" placeholder="Enter Username or Email address..." className="mb-0" />
                            </p>
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            <p />
                            <p>
                                <label htmlFor="password">Password <span className="required">*</span>
                                </label>
                                <input id="password" type="password" name="password" placeholder="Enter password..." className="mb-0"  />
                            </p>
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            <p />
                            <p className="form-row-last">
                                <button className="bt-btn theme-btn">Login</button>
                                <label htmlFor="password">
                                <input type="checkbox" className="mr-1" />Remember me{/* */} </label>
                            </p>
                            <p>
                                <a href="#">Lost your password?</a>
                            </p>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="coupon-accordion">
                    <h3>Have a coupon?{/* */} <span id="showcoupon">Click here to enter your code</span>
                    </h3>
                    <div className="custom-acc ">
                        <div id="checkout_coupon" className="coupon-checkout-content">
                        <div className="coupon-info">
                            <form>
                            <p className="checkout-coupon">
                                <input type="text" className="mb-0" name="coupon" placeholder="Coupon Code" />
                            </p>
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            <button className="bt-btn theme-btn" type="submit">Apply Coupon</button>
                            <p />
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="checkout-area pb-70">
            <div className="container">
                <form action="#">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="checkbox-form">
                        <h3>Billing Details</h3>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="country-select">
                            <label>Country <span className="required">*</span>
                            </label>
                            <select name="country">
                                <option selected>Select your country</option>
                                <option value="bangladesh">bangladesh</option>
                                <option value="Algeria">Algeria</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Albania">Albania</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                            </select>
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkout-form-list">
                            <label htmlFor="fName">First Name{/* */} <span className="required">*</span>
                            </label>
                            <input type="text" id="fName" name="fName"  className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkout-form-list">
                            <label htmlFor="lName">Last Name{/* */} <span className="required">*</span>
                            </label>
                            <input type="text" id="lName" name="lName"  className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="checkout-form-list">
                            <label htmlFor="cName">Company Name{/* */} <span className="required">*</span>
                            </label>
                            <input type="text" id="cName" name="cName"  className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="checkout-form-list">
                            <label htmlFor="address">Address{/* */} <span className="required">*</span>
                            </label>
                            <input type="text" id="address" name="address"  placeholder="Street address" className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="checkout-form-list">
                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="checkout-form-list">
                            <label htmlFor="city">Town / City{/* */} <span className="required">*</span>
                            </label>
                            <input type="text" id="city" name="city"  placeholder="Town / City" className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkout-form-list">
                            <label htmlFor="state">State / County{/* */} <span className="required">*</span>
                            </label>
                            <input type="text" id="state" name="state"  placeholder="State / County" className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkout-form-list">
                            <label htmlFor="zip">Postcode / Zip{/* */} <span className="required">*</span>
                            </label>
                            <input type="text" id="zip" name="zip"  placeholder="Postcode / Zip" className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkout-form-list">
                            <label htmlFor="email">Email Address{/* */} <span className="required">*</span>
                            </label>
                            <input type="email" id="email" name="email"  className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkout-form-list">
                            <label htmlFor="phone">Phone{/* */} <span className="required">*</span>
                            </label>
                            <input type="text" id="phone" name="phone"  className="mb-0" />
                            <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="checkout-form-list create-acc">
                            <input type="checkbox" id="cbox" name="createAccount" />
                            <label>Create an account?</label>
                            </div>
                            <div className="custom-acc ">
                            <div id="cbox_info" className="checkout-form-list create-account">
                                <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                <label htmlFor="password2">Account password{/* */} <span className="required">*</span>
                                </label>
                                <input type="password" id="password2" name="password2" className="mb-0"  />
                                <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="different-address">
                        <div className="ship-different-title">
                            <h3>
                            <label>Ship to a different address?</label>
                            <input type="checkbox" id="ship-box" name="defferentAddress" />
                            </h3>
                        </div>
                        <div className="custom-acc ">
                            <div id="ship-box-info">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="country-select">
                                    <label>Country <span className="required">*</span>
                                    </label>
                                    <select name="country2">
                                    <option selected>Select your country</option>
                                    <option value="bangladesh">bangladesh</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    </select>
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label htmlFor="fName2">First Name{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="text" id="fName2" name="fName2"  className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label htmlFor="lName2">Last Name{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="text" id="lName2" name="lName2"  className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label htmlFor="cName2">Company Name{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="text" id="cName2" name="cName2"  className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label htmlFor="address2">Address2{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="text" id="address2" name="address2"  placeholder="Street address" className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="checkout-form-list">
                                    <label htmlFor="city2">Town / City{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="text" id="city2" name="city2"  placeholder="Town / City" className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label htmlFor="state2">State / County{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="text" id="state2" name="state2"  placeholder="State / County" className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label htmlFor="zip2">Postcode / Zip{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="text" id="zip2" name="zip2"  placeholder="Postcode / Zip" className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label htmlFor="email2">Email Address{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="email" id="email2" name="email2"  className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="checkout-form-list">
                                    <label htmlFor="phone2">Phone{/* */} <span className="required">*</span>
                                    </label>
                                    <input type="text" id="phone2" name="phone2"  className="mb-0" />
                                    <div id="val-username1-error" className="invalid-feedback animated fadeInUp mb-3" style={{display: 'block'}} />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="order-notes">
                            <div className="checkout-form-list">
                            <label>Order Notes</label>
                            <textarea id="checkout-mess" cols={30} rows={10} placeholder="Notes about your order, e.g. special notes for delivery." />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="your-order mb-30 ">
                        <h3>Your order</h3>
                        <div className="your-order-table table-responsive">
                        <table>
                            <thead>
                            <tr>
                                <th className="product-name">Product</th>
                                <th className="product-total">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="cart_item">
                                <td className="product-name">Rounded Plam Hat <strong className="product-quantity"> × 4</strong>
                                </td>
                                <td className="product-total">
                                <span className="amount">$266.00</span>
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr className="cart-subtotal">
                                <th>Cart Subtotal</th>
                                <td>
                                <span className="amount">${/* */}266.00</span>
                                </td>
                            </tr>
                            <tr className="shipping">
                                <th>Shipping</th>
                                <td>
                                <ul>
                                    <li>
                                    <input type="radio" id="flat" />
                                    <label htmlFor="flat">Flat Rate:{/* */} <span className="amount">${/* */}7.00</span>
                                    </label>
                                    </li>
                                    <li>
                                    <input type="radio" id="shipping" />
                                    <label htmlFor="shipping">Free Shipping: ${/* */}30.00</label>
                                    </li>
                                    <li />
                                </ul>
                                </td>
                            </tr>
                            <tr className="order-total">
                                <th>Order Total</th>
                                <td>
                                <strong>
                                    <span className="amount">${/* */}266.00</span>
                                </strong>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                        </div>
                        <div className="payment-method">
                        <div className="accordion">
                            <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">
                                <button className="btn-link" type="button">Direct Bank Transfer</button>
                                </h5>
                            </div>
                            <div className="collapse show">
                                <div className="card-body">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account. <div className="mt-3">
                                    <div className="form-control StripeElement StripeElement--empty">
                                    <div className="__PrivateStripeElement">
                                        <input className="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autoComplete="false" maxLength={1} />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">
                                <button className="btn-link" type="button">Cheque Payment</button>
                                </h5>
                            </div>
                            <div className="collapse">
                                <div className="card-body">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</div>
                            </div>
                            </div>
                            <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">
                                <button className="btn-link" type="button">PayPal</button>
                                </h5>
                            </div>
                            <div className="collapse">
                                <div className="card-body">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account. <div className="mt-3">
                                    <div >
                                    <div id="zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq" className="paypal-buttons paypal-buttons-context-iframe paypal-buttons-label-unknown paypal-buttons-layout-horizontal" data-paypal-smart-button-version="5.0.331" style={{height: '0px', transition: 'all 0.2s ease-in-out 0s'}}>
                                        <div id="smart-menu" className="smart-menu" />
                                        <div id="installments-modal" className="installments-modal" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="order-button-payment mt-20">
                            <button type="submit" className="bt-btn theme-btn">Place order</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </form>
            </div>
        </section>
    </>
  );
}
   