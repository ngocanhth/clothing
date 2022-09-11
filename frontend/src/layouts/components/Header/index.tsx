import { logo } from "@/assets";
import { Link } from "react-router-dom";
import { TopBar } from "./TopBar";

export interface HeaderProps {
}

export function Header (props: HeaderProps) {
  return (
        <header className="header">
                <TopBar /> 

            <div className="product-details-header ml-35 mr-35">
                <div className="container-fluid">
                    <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 col-md-12 d-none d-lg-block">
                        <div className="main-menu product-details-menu">
                        <nav id="mobile-menu-four">
                            <ul>
                            <li>
                                <Link to = "/">Home</Link>
                                <ul className="submenu submenu-three">
                                <li>
                                    <Link to="/">Home Style 1</Link>
                                </li>
                                <li>
                                    <Link to="/index-2">Home Style 2</Link>
                                </li>
                                <li>
                                    <Link to="/index-3">Home Style 3</Link>
                                </li>
                                <li>
                                    <Link to="/index-4">Home Style 4</Link>
                                </li>
                                <li>
                                    <Link to="/index-5">Home Style 5</Link>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <Link to = "/about">About</Link>
                            </li>
                           
                            <li className="mega-menu">
                                <Link to = "/shop" className="mega-menu">Shop</Link>
                                <ul className="submenu ">
                                <li>
                                    <Link to="/shop#">Category View</Link>
                                    <ul className="submenu ">
                                    <li>
                                        <Link to="/shop/col-2">Shop 2 Column</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/right-sidebar">Shop 2 Right Sidebar</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/col-4">Shop 4 Column Full</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/list-view">Shop List View</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/col-4">Shop No Sidebar</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/shop#">Category View</Link>
                                    <ul className="submenu">
                                    <li>
                                        <Link to="/shop">Sidebar Left</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/right-sidebar">Sidebar Right</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/col-4">Style 01</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/right-sidebar">Style 02</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop">Style 03</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/shop#">Product View</Link>
                                    <ul className="submenu">
                                    <li>
                                        <Link to="/product">Simple Product</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/101">Product Upcoming</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop/up-thumb/16">Thumb Top Product</Link>
                                    </li>
                                    <li>
                                        <Link to="/compare">Compare</Link>
                                    </li>
                                    <li>
                                        <Link to="/wishlist">wishlist</Link>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <Link to = "/blog">News</Link>
                                <ul className="submenu">
                                <li>
                                    <Link to="/blog">Blog Standart</Link>
                                </li>
                                <li>
                                    <Link to="/blog/left-sidebar">Blog Left Sidebar</Link>
                                </li>
                                <li>
                                    <Link to="/blog/no-sidebar">Blog No Sidebar</Link>
                                </li>
                                <li>
                                    <Link to="/blog/col-2">Blog 2 Column</Link>
                                </li>
                                <li>
                                    <Link to="/blog/col-mas-2">Blog 2 Col Masonry</Link>
                                </li>
                                <li>
                                    <Link to="/blog/col-3">Blog 3 Column</Link>
                                </li>
                                <li>
                                    <Link to="/blog/col-mas-3">Blog 3 Col Masonry</Link>
                                </li>
                                <li>
                                    <Link to="/blog/1">Blog Details</Link>
                                </li>
                                <li>
                                    <Link to="/blog/10">Blog Details Video</Link>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <Link to = "/shop">Pages</Link>
                                <ul className="submenu">
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/login">login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Shoping Cart</Link>
                                </li>
                                <li>
                                    <Link to="/checkout">Checkout</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Wishlist</Link>
                                </li>
                                <li>
                                    <Link to="/order-success">Order Success</Link>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-5">
                        <div className="logo product-details-logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-3 col-md-7 col-5 header-6-padd">
                        <div className="header-left-icon d-flex align-items-center f-right">
                        <Link className="search-btn nav-search search-trigger" to="/shop#">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <i className="fa-regular fa-magnifying-glass"></i>
                        </Link>
                        <Link to="/login">
                            <i className="fas fa-user" />
                        </Link>
                        <Link className="position-relative" to="/wishlist">
                            <span className="iconValue">0</span>
                            <i className="fas fa-heart" />
                        </Link>
                        <Link className="position-relative" to="/compare">
                            <span className="iconValue">0</span>
                            <i className="fas fa-exchange-alt" />
                        </Link>
                        <Link className="position-relative" to="/cart">
                            <span className="iconValue">0</span>
                            <i className="fas fa-cart-arrow-down" />
                        </Link>
                        </div>
                    </div>
                    <div className="col-2 col-md-1 d-block d-lg-none">
                        <div className="hamburger-menu text-end ">
                        <Link to="shop" className='mega-sub-item-title'>Consumables</Link>
                            <i className="fal fa-bars" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>
  );
}
