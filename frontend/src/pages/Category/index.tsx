export interface CategoryProps {
}

export default function Category (props: CategoryProps) {
  return (
        <section className="shop-sidebar pt-75">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="bar-area">
                    <div className="side-search mb-45">
                        <h6 className="shop-title">Search by</h6>
                        <form action="#" className="shop-search">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Your keyword...."/>
                            <span className="input-group-text bg-dark text-white " id="basic-addon2">Search</span>
                        </div>
                        </form>
                    </div>
                    <div className="side-cat mb-45">
                        <h6 className="cat-title pb-20">Categories</h6>
                        <ul>
                        <li>
                            <a className="text-capitalize" href="/shop/category/home">home (8)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/accessories">accessories (8)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/furniture">furniture (10)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/chair">chair (5)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/covid">covid (6)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/fruits">fruits (3)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/organic">organic (1)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/meats">meats (2)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/vegetable">vegetable (1)</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/category/fish">fish (2)</a>
                        </li>
                        </ul>
                    </div>
                    <div className="slider-range mb-40">
                        <div className="cat-title mb-20">
                        <h6>Filter By Price</h6>
                        </div>
                        <div className="shop-widget">
                        <div aria-disabled="false" className="input-range">
                            <span className="input-range__label input-range__label--min">
                            <span className="input-range__label-container" /></span>
                            <div className="input-range__track input-range__track--background">
                            <div style={{left: '0%', width: '60%'}} className="input-range__track input-range__track--active" />
                            <span className="input-range__slider-container" style={{position: 'absolute', left: '0%'}}>
                                <span className="input-range__label input-range__label--value">
                                <span className="input-range__label-container" /></span>
                                <div aria-valuemax={300} aria-valuemin={0} aria-valuenow={0} className="input-range__slider" draggable="false" role="slider" tabIndex={0} />
                            </span>
                            <span className="input-range__slider-container" style={{position: 'absolute', left: '60%'}}>
                                <span className="input-range__label input-range__label--value">
                                <span className="input-range__label-container" /></span>
                                <div aria-valuemax={500} aria-valuemin={0} aria-valuenow={300} className="input-range__slider" draggable="false" role="slider" tabIndex={0} />
                            </span>
                            </div>
                            <span className="input-range__label input-range__label--max">
                            <span className="input-range__label-container" /></span>
                        </div>
                        <span className="mt-10 d-block">${/* */}0{/* */} - ${/* */}300</span>
                        </div>
                    </div>
                    <div className="side-tag mb-50">
                        <h6 className="cat-title pb-20">Popular Tag</h6>
                        <ul>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/home">home</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/cloth">cloth</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/accessories">accessories</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/furniture">furniture</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/covid">covid</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/fruits">fruits</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/organic">organic</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/meats">meats</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/vegetable">vegetable</a>
                        </li>
                        <li>
                            <a className="text-capitalize" href="/shop/tags/fish">fish</a>
                        </li>
                        </ul>
                    </div>
                    <div className="side-product mb-50">
                        <h6 className="cat-title pb-20">Recent Product</h6>
                        <div className="side-pro-wrapper mb-20">
                        <div className="side-pro-img">
                            <a href="/shop/9">
                            <img src="/img/product/product-14.jpg" className="img-fluid" alt="Product" />
                            </a>
                        </div>
                        <div className="side-pro-text">
                            <h6>
                            <a href="/shop/9">Leather Tablet Case</a>
                            </h6>
                            <span className="price">$50.00 <del>$60.00</del>
                            </span>
                        </div>
                        </div>
                        <div className="side-pro-wrapper mb-20">
                        <div className="side-pro-img">
                            <a href="/shop/10">
                            <img src="/img/product/product-15.jpg" className="img-fluid" alt="Product" />
                            </a>
                        </div>
                        <div className="side-pro-text">
                            <h6>
                            <a href="/shop/10">Transparent Clear Case</a>
                            </h6>
                            <span className="price">$120.00 </span>
                        </div>
                        </div>
                        <div className="side-pro-wrapper mb-20">
                        <div className="side-pro-img">
                            <a href="/shop/11">
                            <img src="/img/product/product-53.jpg" className="img-fluid" alt="Product" />
                            </a>
                        </div>
                        <div className="side-pro-text">
                            <h6>
                            <a href="/shop/11">Gamepad Wired PC</a>
                            </h6>
                            <span className="price">$90.50 </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    <div className="content-header mb-55">
                    <div className="ch-left">
                        <div className="nav shop-tabs nav" id="myTab" role="tablist">
                        <div className="nav-item">
                            <a href="#" role="tab" data-rb-event-key="grid" aria-selected="true" className="nav-link active">
                            <i className="fas fa-th" />
                            </a>
                        </div>
                        <div className="nav-item">
                            <a href="#" role="tab" data-rb-event-key="list" aria-selected="false" className="nav-link">
                            <i className="fas fa-list-ul" />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="ch-right p-0">
                        <div className="show-text m-0">
                        <span className="p-0 border-0">Showing 01–06 of 29 results</span>
                        </div>
                    </div>
                    </div>
                    <div id="myTabContent" className="tab-content shop-tabs-content tab-content">
                    <div role="tabpanel" aria-hidden="false" className="fade tab-pane active show">
                        <div className="row custom-row-10">
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-block">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/9">
                                <img src="/img/product/product-14.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/9">Leather Tablet Case</a>
                                </h6>
                                <h5 className="pro-price">$50.00 <del>$60.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-block">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/10">
                                <img src="/img/product/product-15.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" >
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/10">Transparent Clear Case</a>
                                </h6>
                                <h5 className="pro-price">$120.00 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-block">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/11">
                                <img src="/img/product/product-53.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" >
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/11">Gamepad Wired PC</a>
                                </h6>
                                <h5 className="pro-price">$90.50 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-block">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/12">
                                <img src="/img/product/product-54.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" >
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/12">Bluetooth Headphone</a>
                                </h6>
                                <h5 className="pro-price">$75.00 <del>$150.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-block">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/13">
                                <img src="/img/product/product-12.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" >
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/13">Luxury Brand Sport</a>
                                </h6>
                                <h5 className="pro-price">$30.00 <del>$35.50</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-block">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/14">
                                <img src="/img/product/product-10.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" >
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/14">Watches For Mens</a>
                                </h6>
                                <h5 className="pro-price">$150.00 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/15">
                                <img src="/img/product/product-11.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/15">IOS Tablet WiFi/Cellular</a>
                                </h6>
                                <h5 className="pro-price">$150.50 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/16">
                                <img src="/img/product/product-22.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/16">Transparent Cute Mug 2</a>
                                </h6>
                                <h5 className="pro-price">$29.50 <del>$29.50</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/17">
                                <img src="/img/product/product-25.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" >
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/17">Outdoor Camping Chair</a>
                                </h6>
                                <h5 className="pro-price">$25.00 <del>$30.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/18">
                                <img src="/img/product/product-23.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/18">modern art resin</a>
                                </h6>
                                <h5 className="pro-price">$25.00 <del>$30.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/19">
                                <img src="/img/product/product-28.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/19">Hardware Set Wall</a>
                                </h6>
                                <h5 className="pro-price">$29.50 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/20">
                                <img src="/img/product/product-29.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/20">Jacquard Chair Cushion</a>
                                </h6>
                                <h5 className="pro-price">$80.00 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/21">
                                <img src="/img/product/product-27.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/21">Super Thick Cotton</a>
                                </h6>
                                <h5 className="pro-price">$80.00 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/22">
                                <img src="/img/product/product-31.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/22">Cotton Jersey Top</a>
                                </h6>
                                <h5 className="pro-price">$80.00 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/23">
                                <img src="/img/product/product-33.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/23">Cotton Jersey Top</a>
                                </h6>
                                <h5 className="pro-price">$39.90 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/24">
                                <img src="/img/product/product-20.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/24">Loose Oversized Mug</a>
                                </h6>
                                <h5 className="pro-price">$39.90 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/25">
                                <img src="/img/product/product-17.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/25">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">$39.90 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/40">
                                <img src="/img/product/product-40.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/40">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">$29.50 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/41">
                                <img src="/img/product/product-41.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/41">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">$29.50 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/42">
                                <img src="/img/product/product-42.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/42">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">$29.50 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/43">
                                <img src="/img/product/product-43.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/43">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">$29.50 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/44">
                                <img src="/img/product/product-44.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/44">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">$29.50 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/45">
                                <img src="/img/product/product-45.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/45">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">$29.50 </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/46">
                                <img src="/img/product/fruit-product-8.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare" >
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/46">Organic Hass Apple</a>
                                </h6>
                                <h5 className="pro-price">$30.00 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/47">
                                <img src="/img/product/fruit-product-6.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/47">Organic Hass Avocado</a>
                                </h6>
                                <h5 className="pro-price">$30.00 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/48">
                                <img src="/img/product/fruit-product-2.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/48">Fresh Green Grapes</a>
                                </h6>
                                <h5 className="pro-price">$30.00 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/49">
                                <img src="/img/product/fruit-product-5.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/49">Fresh Green Cucumber</a>
                                </h6>
                                <h5 className="pro-price">$30.00 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/50">
                                <img src="/img/product/fruit-product-6.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/50">Fresh Green Cucumber</a>
                                </h6>
                                <h5 className="pro-price">$30.00 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 custom-col-10 d-none">
                            <div className="product-wrapper mb-40">
                            <div className="pro-img mb-20">
                                <a href="/shop/51">
                                <img src="/img/product/fruit-product-7.jpg" className="img-fluid" alt="Product" />
                                </a>
                                <div className="product-action text-center">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Shoppingb Cart">
                                    <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                                    <i className="fal fa-eye" />
                                </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="Compare">
                                    <i className="fal fa-exchange" />
                                </a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/51">Fresh Green Cucumber</a>
                                </h6>
                                <h5 className="pro-price">$30.00 <del>$40.00</del>
                                </h5>
                                </div>
                                <div className="cart-icon">
                                <a href="#" className="  ">
                                    <i className="fal fa-heart" />
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div role="tabpanel" aria-hidden="true" className="fade tab-pane">
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/9">
                                <img src="/img/product/product-14.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/9">Leather Tablet Case</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$50.00 USD</span>
                                    <del className="old-price ml-2">$60.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/10">
                                <img src="/img/product/product-15.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/10">Transparent Clear Case</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$120.00 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/11">
                                <img src="/img/product/product-53.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/11">Gamepad Wired PC</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$90.50 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/12">
                                <img src="/img/product/product-54.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/12">Bluetooth Headphone</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$75.00 USD</span>
                                    <del className="old-price ml-2">$150.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/13">
                                <img src="/img/product/product-12.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/13">Luxury Brand Sport</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$30.00 USD</span>
                                    <del className="old-price ml-2">$35.50 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/14">
                                <img src="/img/product/product-10.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/14">Watches For Mens</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$150.00 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/15">
                                <img src="/img/product/product-11.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/15">IOS Tablet WiFi/Cellular</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$150.50 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/16">
                                <img src="/img/product/product-22.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/16">Transparent Cute Mug 2</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$29.50 USD</span>
                                    <del className="old-price ml-2">$29.50 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/17">
                                <img src="/img/product/product-25.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/17">Outdoor Camping Chair</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$25.00 USD</span>
                                    <del className="old-price ml-2">$30.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/18">
                                <img src="/img/product/product-23.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/18">modern art resin</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$25.00 USD</span>
                                    <del className="old-price ml-2">$30.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/19">
                                <img src="/img/product/product-28.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/19">Hardware Set Wall</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$29.50 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/20">
                                <img src="/img/product/product-29.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/20">Jacquard Chair Cushion</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$80.00 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/21">
                                <img src="/img/product/product-27.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/21">Super Thick Cotton</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$80.00 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/22">
                                <img src="/img/product/product-31.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/22">Cotton Jersey Top</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$80.00 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/23">
                                <img src="/img/product/product-33.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/23">Cotton Jersey Top</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$39.90 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/24">
                                <img src="/img/product/product-20.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/24">Loose Oversized Mug</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$39.90 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/25">
                                <img src="/img/product/product-17.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/25">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$39.90 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/40">
                                <img src="/img/product/product-40.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/40">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$29.50 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/41">
                                <img src="/img/product/product-41.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/41">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$29.50 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/42">
                                <img src="/img/product/product-42.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/42">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$29.50 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/43">
                                <img src="/img/product/product-43.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/43">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$29.50 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/44">
                                <img src="/img/product/product-44.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/44">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$29.50 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/45">
                                <img src="/img/product/product-45.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag" />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/45">Loosing Oversized Dummy</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$29.50 USD</span>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/46">
                                <img src="/img/product/fruit-product-8.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag">
                                <span className="sale">sale</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/46">Organic Hass Apple</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$30.00 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/47">
                                <img src="/img/product/fruit-product-6.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag">
                                <span className="new">new</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/47">Organic Hass Avocado</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$30.00 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/48">
                                <img src="/img/product/fruit-product-2.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag">
                                <span className="new">new</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/48">Fresh Green Grapes</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$30.00 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/49">
                                <img src="/img/product/fruit-product-5.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag">
                                <span className="new">new</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/49">Fresh Green Cucumber</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$30.00 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/50">
                                <img src="/img/product/fruit-product-6.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag">
                                <span className="new">new</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/50">Fresh Green Cucumber</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$30.00 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-4 col-sm-6 custom-col-10">
                            <div className="product-wrapper mb-30">
                            <div className="pro-img mb-20">
                                <a href="/shop/51">
                                <img src="/img/product/fruit-product-7.jpg" alt="img 1" />
                                </a>
                                <div className="sale-tag">
                                <span className="new">new</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 custom-col-10">
                            <div className="product-wrapper pro-list-content mb-40">
                            <div className="pro-text">
                                <div className="pro-title">
                                <h6>
                                    <a href="/shop/51">Fresh Green Cucumber</a>
                                </h6>
                                <h5 className="pro-price">
                                    <span>$30.00 USD</span>
                                    <del className="old-price ml-2">$40.00 USD</del>
                                </h5>
                                </div>
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div className="product-action">
                                <a href="#" title="Shoppingb Cart">
                                <i className="fal fa-cart-arrow-down" />
                                </a>
                                <a href="#">
                                <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="  ">
                                <i className="fal fa-exchange" />
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="mt-5 mb-5">
                    <div className="row">
                        <div className="col-12">
                        <div className="basic-pagination basic-pagination-2 text-center">
                            <ul>
                            <li>
                                <a href="#">
                                <i className="fas fa-angle-double-left" />
                                </a>
                            </li>
                            <li className="active">
                                <a href="#">01</a>
                            </li>
                            <li>
                                <a href="#">02</a>
                            </li>
                            <li >
                                <a href="#">03</a>
                            </li>
                            <li >
                                <a href="#">04</a>
                            </li>
                            <li >
                                <a href="#">05</a>
                            </li>
                            <li>
                                <a href="#">
                                <i className="fas fa-angle-double-right" />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
  );
}
