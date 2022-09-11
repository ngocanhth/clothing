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
                                    <div className="__PrivateStripeElement" style={{margin: '0px !important', padding: '0px !important', border: 'none !important', display: 'block !important', background: 'transparent !important', position: 'relative !important', opacity: '1 !important'}}>
                                        <iframe name="__privateStripeFrame5356" frameBorder={0} allowTransparency="true" scrolling="no" allow="payment *" src="https://js.stripe.com/v3/elements-inner-card-0e53d7336481e139735069c658c823ad.html#wait=false&mids[guid]=NA&mids[muid]=bd4bfe61-17a6-451a-bdd2-62e8edd1e9d518a63b&mids[sid]=9fba2ae4-dd89-4ffc-8fb7-4bf67805af961a667e&rtl=false&componentName=card&keyMode=test&apiKey=pk_test_6pRNASCoBOKtIshFeQd4XMUh&referrer=https%3A%2F%2Fretro-beryl.vercel.app%2Fcheckout&controllerId=__privateStripeController5351" title="Secure card payment input frame" style={{border: 'none !important', margin: '0px !important', padding: '0px !important', width: '1px !important', minWidth: '100% !important', overflow: 'hidden !important', display: 'block !important', userSelect: 'none !important', transform: 'translate(0px) !important', colorScheme: 'light only !important', height: '16.8px'}} />
                                        <input className="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autoComplete="false" maxLength={1} style={{border: 'none !important', display: 'block !important', position: 'absolute !important', height: '1px !important', top: '-1px !important', left: '0px !important', padding: '0px !important', margin: '0px !important', width: '100% !important', opacity: '0 !important', background: 'transparent !important', pointerEvents: 'none !important', fontSize: '16px !important'}} />
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
                                    <div className>
                                    <div id="zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq" className="paypal-buttons paypal-buttons-context-iframe paypal-buttons-label-unknown paypal-buttons-layout-horizontal" data-paypal-smart-button-version="5.0.331" style={{height: '0px', transition: 'all 0.2s ease-in-out 0s'}}>
                                        <style nonce dangerouslySetInnerHTML={{__html: "\n                    #zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-height: 25px;\n                        min-width: 150px;\n                        max-width: 750px;\n                        font-size: 0;\n                    }\n\n                    #zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq > iframe.component-frame {\n                        z-index: 100;\n                    }\n\n                    #zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq > iframe.prerender-frame {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq > iframe.visible {\n                        opacity: 1;\n                    }\n\n                    #zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq > iframe.invisible {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n\n                    #zoid-paypal-buttons-uid_3b96accccf_mdm6nty6ndq > .smart-menu {\n                        position: absolute;\n                        z-index: 300;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                    }\n                " }} />
                                        <iframe allowTransparency="true" name="__zoid__paypal_buttons__eyJzZW5kZXIiOnsiZG9tYWluIjoiaHR0cHM6Ly9yZXRyby1iZXJ5bC52ZXJjZWwuYXBwIn0sIm1ldGFEYXRhIjp7IndpbmRvd1JlZiI6eyJ0eXBlIjoicGFyZW50IiwiZGlzdGFuY2UiOjB9fSwicmVmZXJlbmNlIjp7InR5cGUiOiJyYXciLCJ2YWwiOiJ7XCJ1aWRcIjpcInpvaWQtcGF5cGFsLWJ1dHRvbnMtdWlkXzNiOTZhY2NjY2ZfbWRtNm50eTZuZHFcIixcImNvbnRleHRcIjpcImlmcmFtZVwiLFwidGFnXCI6XCJwYXlwYWwtYnV0dG9uc1wiLFwiY2hpbGREb21haW5NYXRjaFwiOntcIl9fdHlwZV9fXCI6XCJyZWdleFwiLFwiX192YWxfX1wiOlwiXFxcXC5wYXlwYWxcXFxcLihjb218Y24pKDpcXFxcZCspPyRcIn0sXCJ2ZXJzaW9uXCI6XCIxMF8xXzBcIixcInByb3BzXCI6e1wic3R5bGVcIjp7XCJjdXN0b21cIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwibGFiZWxcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwibGF5b3V0XCI6XCJob3Jpem9udGFsXCIsXCJjb2xvclwiOlwiZ29sZFwiLFwic2hhcGVcIjpcInJlY3RcIixcInRhZ2xpbmVcIjp0cnVlLFwiaGVpZ2h0XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInBlcmlvZFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJtZW51UGxhY2VtZW50XCI6XCJiZWxvd1wifSxcIm9uSW5pdFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2VhYjA1NzU1OTdfbWRtNm50eTZuZHFcIixcIm5hbWVcIjpcIm9uSW5pdFwifX0sXCJjc3BOb25jZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJmdW5kaW5nU291cmNlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInN0b3JhZ2VTdGF0ZVwiOntcImdldFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzM4ZDc5Y2I5YWFfbWRtNm50eTZuZHFcIixcIm5hbWVcIjpcImdldFwifX0sXCJzZXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF80N2JmOWNjNmRjX21kbTZudHk2bmRxXCIsXCJuYW1lXCI6XCJzZXRcIn19fSxcInNlc3Npb25TdGF0ZVwiOntcImdldFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzgzOTZiNGI4MjRfbWRtNm50eTZuZHFcIixcIm5hbWVcIjpcImdldFwifX0sXCJzZXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8yN2MxMTdjYjE1X21kbTZudHk2bmRxXCIsXCJuYW1lXCI6XCJzZXRcIn19fSxcImNvbXBvbmVudHNcIjpbXCJidXR0b25zXCJdLFwibG9jYWxlXCI6e1wiY291bnRyeVwiOlwiVVNcIixcImxhbmdcIjpcImVuXCJ9LFwiY3JlYXRlT3JkZXJcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiY3JlYXRlQmlsbGluZ0FncmVlbWVudFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJjcmVhdGVTdWJzY3JpcHRpb25cIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwib25BcHByb3ZlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcIm9uQ29tcGxldGVcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwib25TaGlwcGluZ0NoYW5nZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJvblNoaXBwaW5nQWRkcmVzc0NoYW5nZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJvblNoaXBwaW5nT3B0aW9uc0NoYW5nZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJvbkNhbmNlbFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJvbkNsaWNrXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImdldFByZXJlbmRlckRldGFpbHNcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF84MjM5NjBlY2Q1X21kbTZudHk2bmRxXCIsXCJuYW1lXCI6XCJnZXRQcmVyZW5kZXJEZXRhaWxzXCJ9fSxcImdldFBvcHVwQnJpZGdlXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfNWMxMWRmYzQ1MV9tZG02bnR5Nm5kcVwiLFwibmFtZVwiOlwiZ2V0UG9wdXBCcmlkZ2VcIn19LFwiZ2V0UXVlcmllZEVsaWdpYmxlRnVuZGluZ1wiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2IyYmNkMzc1OGNfbWRtNm50eTZuZHFcIixcIm5hbWVcIjpcImdldFF1ZXJpZWRFbGlnaWJsZUZ1bmRpbmdcIn19LFwiY2xpZW50SURcIjpcIkFaRHhqRFNjRnBRdGpXVE9VdFdLYnlOX2JEdDRPZ3FhRjRlWVhsZXdmQlA0LThhcVgzUGlWOGUxR1dVNmxpQjJDVVhsa0E1OWtKWEU3TTZSXCIsXCJjbGllbnRBY2Nlc3NUb2tlblwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJwYXJ0bmVyQXR0cmlidXRpb25JRFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJtZXJjaGFudFJlcXVlc3RlZFBvcHVwc0Rpc2FibGVkXCI6ZmFsc2UsXCJlbmFibGVUaHJlZURvbWFpblNlY3VyZVwiOmZhbHNlLFwic2RrQ29ycmVsYXRpb25JRFwiOlwiZjYzNDc2NDI3NGQzY1wiLFwic3RvcmFnZUlEXCI6XCJ1aWRfZWNhODRlMjI3NV9tZG02bnR5Nm5kcVwiLFwic2Vzc2lvbklEXCI6XCJ1aWRfOWY2ODUzZThmYl9tZG02bnR5Nm5kcVwiLFwiYnV0dG9uU2Vzc2lvbklEXCI6XCJ1aWRfNTRlMjFkYWMzNl9tZG02bnR5Nm5kcVwiLFwiZW5hYmxlVmF1bHRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiZW52XCI6XCJzYW5kYm94XCIsXCJhbW91bnRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwic3RhZ2VIb3N0XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImJ1dHRvblNpemVcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiYXBpU3RhZ2VIb3N0XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImZ1bmRpbmdFbGlnaWJpbGl0eVwiOntcInBheXBhbFwiOntcImVsaWdpYmxlXCI6dHJ1ZSxcInZhdWx0YWJsZVwiOnRydWV9LFwicGF5bGF0ZXJcIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwicHJvZHVjdHNcIjp7XCJwYXlJbjNcIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwidmFyaWFudFwiOm51bGx9LFwicGF5SW40XCI6e1wiZWxpZ2libGVcIjpmYWxzZSxcInZhcmlhbnRcIjpudWxsfSxcInBheWxhdGVyXCI6e1wiZWxpZ2libGVcIjpmYWxzZSxcInZhcmlhbnRcIjpudWxsfX19LFwiY2FyZFwiOntcImVsaWdpYmxlXCI6dHJ1ZSxcImJyYW5kZWRcIjp0cnVlLFwiaW5zdGFsbG1lbnRzXCI6ZmFsc2UsXCJ2ZW5kb3JzXCI6e1widmlzYVwiOntcImVsaWdpYmxlXCI6dHJ1ZSxcInZhdWx0YWJsZVwiOnRydWV9LFwibWFzdGVyY2FyZFwiOntcImVsaWdpYmxlXCI6dHJ1ZSxcInZhdWx0YWJsZVwiOnRydWV9LFwiYW1leFwiOntcImVsaWdpYmxlXCI6dHJ1ZSxcInZhdWx0YWJsZVwiOnRydWV9LFwiZGlzY292ZXJcIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJoaXBlclwiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXVsdGFibGVcIjpmYWxzZX0sXCJlbG9cIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJqY2JcIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwidmF1bHRhYmxlXCI6dHJ1ZX19LFwiZ3Vlc3RFbmFibGVkXCI6ZmFsc2V9LFwidmVubW9cIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcIml0YXVcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcImNyZWRpdFwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiYXBwbGVwYXlcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcInNlcGFcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcImlkZWFsXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJiYW5jb250YWN0XCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJnaXJvcGF5XCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJlcHNcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcInNvZm9ydFwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwibXliYW5rXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJwMjRcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcInppbXBsZXJcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcIndlY2hhdHBheVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwicGF5dVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiYmxpa1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwidHJ1c3RseVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwib3h4b1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwibWF4aW1hXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJib2xldG9cIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcImJvbGV0b2JhbmNhcmlvXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJtZXJjYWRvcGFnb1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwibXVsdGliYW5jb1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9fSxcInBsYXRmb3JtXCI6XCJkZXNrdG9wXCIsXCJyZW1lbWJlcmVkXCI6W10sXCJleHBlcmltZW50XCI6e1wiZW5hYmxlVmVubW9cIjpmYWxzZSxcImVuYWJsZVZlbm1vQXBwTGFiZWxcIjpmYWxzZX0sXCJwYXltZW50UmVxdWVzdFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJmbG93XCI6XCJwdXJjaGFzZVwiLFwicmVtZW1iZXJcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9hZWUzNmY4ZjhjX21kbTZudHk2bmRxXCIsXCJuYW1lXCI6XCJyZW1lbWJlclwifX0sXCJjdXJyZW5jeVwiOlwiVVNEXCIsXCJpbnRlbnRcIjpcImNhcHR1cmVcIixcImJ1eWVyQ291bnRyeVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJjb21taXRcIjp0cnVlLFwidmF1bHRcIjpmYWxzZSxcImVuYWJsZUZ1bmRpbmdcIjpbXSxcImRpc2FibGVGdW5kaW5nXCI6W10sXCJkaXNhYmxlQ2FyZFwiOltdLFwibWVyY2hhbnRJRFwiOltdLFwicmVuZGVyZWRCdXR0b25zXCI6W1wicGF5cGFsXCJdLFwiY3NwXCI6e1wibm9uY2VcIjpcIlwifSxcIm5vbmNlXCI6XCJcIixcImdldFBhZ2VVcmxcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF82YzZlYTk1Yzg1X21kbTZudHk2bmRxXCIsXCJuYW1lXCI6XCJnZXRQYWdlVXJsXCJ9fSxcInVzZXJJRFRva2VuXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImNsaWVudE1ldGFkYXRhSURcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiZGVidWdcIjpmYWxzZSxcInRlc3RcIjp7XCJhY3Rpb25cIjpcImNoZWNrb3V0XCJ9LFwid2FsbGV0XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInBheW1lbnRNZXRob2ROb25jZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJwYXltZW50TWV0aG9kVG9rZW5cIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiYnJhbmRlZFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJhcHBsZVBheVN1cHBvcnRcIjpmYWxzZSxcInN1cHBvcnRzUG9wdXBzXCI6dHJ1ZSxcInN1cHBvcnRlZE5hdGl2ZUJyb3dzZXJcIjpmYWxzZSxcInVzZXJFeHBlcmllbmNlRmxvd1wiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJhcHBsZVBheVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJleHBlcmllbmNlXCI6XCJcIixcImFsbG93QmlsbGluZ1BheW1lbnRzXCI6dHJ1ZX0sXCJleHBvcnRzXCI6e1wiaW5pdFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2U2NDg3N2Q1MmFfbWRtNm50eTZuZHFcIixcIm5hbWVcIjpcImluaXRcIn19LFwiY2xvc2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF85MjZiNmE3NWMwX21kbTZudHk2bmRxXCIsXCJuYW1lXCI6XCJjbG9zZTo6bWVtb2l6ZWRcIn19LFwiY2hlY2tDbG9zZVwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2IwODY2MjJmN2VfbWRtNm50eTZuZHFcIixcIm5hbWVcIjpcImNoZWNrQ2xvc2VcIn19LFwicmVzaXplXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfMmEwNTE0YjRlN19tZG02bnR5Nm5kcVwiLFwibmFtZVwiOlwiUGVcIn19LFwib25FcnJvclwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2ViZGQxZjMyZDJfbWRtNm50eTZuZHFcIixcIm5hbWVcIjpcIkRlXCJ9fSxcInNob3dcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF84YTE5MzE3ZjYzX21kbTZudHk2bmRxXCIsXCJuYW1lXCI6XCJoZVwifX0sXCJoaWRlXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfM2VjNDQzZjU4Y19tZG02bnR5Nm5kcVwiLFwibmFtZVwiOlwibWVcIn19LFwiZXhwb3J0XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfYTA5MWIzMjdiMl9tZG02bnR5Nm5kcVwiLFwibmFtZVwiOlwiSGVcIn19fX0ifX0__" title="PayPal" allowpaymentrequest="allowpaymentrequest" scrolling="no" id="jsx-iframe-a50e056b27" className="component-frame visible" style={{backgroundColor: 'transparent', border: 'none'}} />
                                        <div id="smart-menu" className="smart-menu" />
                                        <div id="installments-modal" className="installments-modal" />
                                        <iframe name="__detect_close_uid_ea915562b1_mdm6nty6ndq__" style={{display: 'none'}} />
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
   