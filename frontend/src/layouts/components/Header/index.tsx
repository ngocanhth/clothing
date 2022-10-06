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
                            <li className="mega-menu">
                                <Link to = "/category" className="mega-menu">Thời Trang Nữ</Link>
                                <ul className="submenu ">
                                <li>
                                    <Link to="/category#">Áo</Link>
                                    <ul className="submenu ">
                                    <li>
                                        <Link to="/category/col-2">Áo Thun</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/right-sidebar">UT (Áo Thun Họa Tiết)</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Áo Nỉ & Áo Hoodie</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/list-view">Áo Sơ Mi & Áo Kiểu</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Áo Cardigan</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/category#">Quần & Chân váy</Link>
                                    <ul className="submenu ">
                                    <li>
                                        <Link to="/category/col-2">Quần Jeans</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/right-sidebar">Quần Legging</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Quần Ống Rộng</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/list-view">Quần Tây</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/list-view">Quần Dài</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Tất Cả Quần</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/category#">Thời trang thu đông</Link>
                                    <ul className="submenu">
                                    <li>
                                        <Link to="/category">Áo khoác lông cừu - vũ</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/right-sidebar">Áo khoác</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Áo - Quần giữ nhiệt</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/right-sidebar">Áo nỉ - Áo len</Link>
                                    </li>
                                    <li>
                                        <Link to="/category">Quần tất</Link>
                                    </li>
                                    <li>
                                        <Link to="/category">Khăn quàng - tất</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/category#">Giày dép & Phụ kiện</Link>
                                    <ul className="submenu">
                                    <li>
                                        <Link to="/product">Túi</Link>
                                    </li>
                                    <li>
                                        <Link to="/product">Ví</Link>
                                    </li>
                                    <li>
                                        <Link to="/product">Balo</Link>
                                    </li>
                                    <li>
                                        <Link to="/compare">Thắt Lưng</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/101">Giày & Giày Boots</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/101">Kính Mát</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/up-thumb/16">Trang sức</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/up-thumb/16"> Phụ kiện khác</Link>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </li>

                            <li className="mega-menu">
                                <Link to = "/category" className="mega-menu">Thời Trang Nam</Link>
                                <ul className="submenu ">
                                <li>
                                    <Link to="/category#">Áo</Link>
                                    <ul className="submenu ">
                                    <li>
                                        <Link to="/category/col-2">Áo Thun</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/right-sidebar">UT (Áo Thun Họa Tiết)</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Áo Nỉ & Áo Hoodie</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/list-view">Áo Sơ Mi & Áo Kiểu</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Áo Cardigan</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/category#">Quần & Chân váy</Link>
                                    <ul className="submenu ">
                                    <li>
                                        <Link to="/category/col-2">Quần Jeans</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/right-sidebar">Quần Legging</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Quần Ống Rộng</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/list-view">Quần Tây</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/list-view">Quần Dài</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Tất Cả Quần</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/category#">Thời trang thu đông</Link>
                                    <ul className="submenu">
                                    <li>
                                        <Link to="/category">Áo khoác lông cừu - vũ</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/right-sidebar">Áo khoác</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/col-4">Áo - Quần giữ nhiệt</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/right-sidebar">Áo nỉ - Áo len</Link>
                                    </li>
                                    <li>
                                        <Link to="/category">Quần tất</Link>
                                    </li>
                                    <li>
                                        <Link to="/category">Khăn quàng - tất</Link>
                                    </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/category#">Giày dép & Phụ kiện</Link>
                                    <ul className="submenu">
                                    <li>
                                        <Link to="/product">Túi</Link>
                                    </li>
                                    <li>
                                        <Link to="/product">Ví</Link>
                                    </li>
                                    <li>
                                        <Link to="/product">Balo</Link>
                                    </li>
                                    <li>
                                        <Link to="/compare">Thắt Lưng</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/101">Giày & Giày Boots</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/101">Kính Mát</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/up-thumb/16">Trang sức</Link>
                                    </li>
                                    <li>
                                        <Link to="/category/up-thumb/16"> Phụ kiện khác</Link>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                   
                            <li>
                                <Link to = "/category">Làm đẹp</Link>
                                <ul className="submenu">
                                <li>
                                    <Link to="/about">Sữa tắm - Dưỡng thể</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Dầu gội xả</Link>
                                </li>
                                <li>
                                    <Link to="/login">Kem/ Xịt chống nắng</Link>
                                </li>
                                <li>
                                    <Link to="/register">Nước hoa</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Mặt nạ</Link>
                                </li>
                                <li>
                                    <Link to="/checkout">Sữa rửa mặt</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Tẩy trang các loại</Link>
                                </li>
                                <li>
                                    <Link to="/order-success">Dưỡng da</Link>
                                </li>
                                <li>
                                    <Link to="/order-success">Son dưỡng</Link>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <Link to = "/blog">Tin tức</Link>
                                <ul className="submenu">
                                <li>
                                    <Link to="/blog">Cẩm nang đi du lịch Nhật Bản</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Địa điểm du lịch Nhật Bản</Link>
                                </li>
                                <li>
                                    <Link to="/blog/left-sidebar">Xuất khẩu lao động Nhật Bản</Link>
                                </li>
                                <li>
                                    <Link to="/blog/no-sidebar">Cách lấy tiền Nenkin</Link>
                                </li>
                                <li>
                                    <Link to="/blog/col-2">Các địa điểm du lịch Nhật Bản</Link>
                                </li>
                                <li>
                                    <Link to="/blog/col-mas-2">Tìm hiểu về văn hóa Nhật Bản</Link>
                                </li>
                                <li>
                                    <Link to="/blog/col-3">Ẩm thực Nhật Bản</Link>
                                </li>
                                <li>
                                    <Link to="/blog/col-mas-3">Địa điểm ăn uống ở Nhật Bản</Link>
                                </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/contact">Liên hệ</Link>
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
                        <Link className="search-btn nav-search search-trigger" to="/category#">
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
