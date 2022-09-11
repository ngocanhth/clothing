import * as React from 'react';

export interface IWishlistProps {
}

export function Wishlist (props: IWishlistProps) {
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
                            <img src="/img/product/product-12.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Luxury Brand Sport</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$30.00</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$30.00</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-10.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Watches For Mens</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$150.00</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$150.00</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-54.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Bluetooth Headphone</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$75.00</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$75.00</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-14.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Leather Tablet Case</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$50.00</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$50.00</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-53.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Gamepad Wired PC</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$90.50</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$90.50</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-23.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">modern art resin</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$25.00</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$25.00</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-28.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Hardware Set Wall</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$29.50</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$29.50</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-29.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Jacquard Chair Cushion</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$80.00</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$80.00</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-11.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">IOS Tablet WiFi/Cellular</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$150.50</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$150.50</span>
                        </td>
                        <td className="product-remove">
                            <a href="#">
                            <i className="fa fa-times" />
                            </a>
                        </td>
                        </tr>
                        <tr>
                        <td className="product-thumbnail">
                            <a href="#">
                            <img src="/img/product/product-25.jpg" alt="wishlist" />
                            </a>
                        </td>
                        <td className="product-name">
                            <a href="#">Outdoor Camping Chair</a>
                        </td>
                        <td className="product-price">
                            <span className="amount">$25.00</span>
                        </td>
                        <td className="product-quantity">
                            <a className="bt-btn theme-btn-2" href="/wishlist#">Add TO Cart</a>
                        </td>
                        <td className="product-subtotal">
                            <span className="amount">$25.00</span>
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
                </form>
            </div>
            </div>
        </div>
    </section>
  );
}
