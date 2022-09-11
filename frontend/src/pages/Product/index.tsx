import * as React from 'react';
import { ProductDescription } from './ProductDescription';
import { RelatedProduct } from './RelatedProduct';

export interface ProductDetailProps {
}

export function ProductDetail (props: ProductDetailProps) {
  return (
    <>
        <section className="product-details-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                <div className=" col-lg-7">
                    <div className="pro-details-tab">
                    <div className="tab-content custom-content tab-content">
                        <div role="tabpanel" aria-hidden="false" className="fade tab-pane active show">
                        <img src="/img/product/product-3.jpg" className="img-fluid " alt="Tum img" />
                        </div>
                        <div role="tabpanel" aria-hidden="true" className="fade tab-pane">
                        <img src="/img/product/product-6.jpg" className="img-fluid " alt="Tum img" />
                        </div>
                        <div role="tabpanel" aria-hidden="true" className="fade tab-pane">
                        <img src="/img/product/product-1.jpg" className="img-fluid " alt="Tum img" />
                        </div>
                    </div>
                    <div className="nav custom-tab nav" id="myTab" role="tablist">
                        <div className="nav-item">
                        <a href="#" role="tab" data-rb-event-key="tum-0" aria-selected="true" className="mr-0 nav-link active">
                            <img src="/img/product/product-3.jpg" className="img-fluid" alt="Src" />
                        </a>
                        </div>
                        <div className="nav-item">
                        <a href="#" role="tab" data-rb-event-key="tum-1" aria-selected="false" className="mr-0 nav-link">
                            <img src="/img/product/product-6.jpg" className="img-fluid" alt="Src" />
                        </a>
                        </div>
                        <div className="nav-item">
                        <a href="#" role="tab" data-rb-event-key="tum-2" aria-selected="false" className="mr-0 nav-link">
                            <img src="/img/product/product-1.jpg" className="img-fluid" alt="Src" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="pro-details-content mt-15">
                    <h4>Specticle Glasses</h4>
                    <span className="details-pro-price mb-40">$ 100.50 </span>
                    <p>La croix blog sriracha, distillery ugh small batch retro literally coloring book disrupt gochujang affogato. Edison bulb. The next generation of our icon library + toolkit is coming with more icons, more styles, more services..</p>
                    <div className="pro-quan-area mb-55">
                        <div className="product-quantity">
                        <div className="cart-plus-minus">
                            <input type="text" disabled defaultValue={1} />
                            <button className="dec qtybutton" disabled>-</button>
                            <button className="inc qtybutton" disabled>+</button>
                        </div>
                        </div>
                        <div className="pro-cart-btn ml-20">
                        <a href="#">Add to cart</a>
                        </div>
                        <div className="pro-wish ml-45">
                        <a href="#" className=" ">
                            <i className="fas fa-heart" />
                        </a>
                        <a href="#" className=" ">
                            <i className="fas fa-exchange-alt" />
                        </a>
                        </div>
                    </div>
                    <div className="stock-update">
                        <div className="stock-list">
                        <ul>
                            <li>
                            <span>Stock :</span>
                            <span className="s-text red">In Stock</span>
                            </li>
                            <li>
                            <span>SKU :</span>
                            <span className="s-text">h3</span>
                            </li>
                            <li>
                            <span>Categgory :</span>
                            <span className="s-text text-capitalize"> cloth</span>
                            </li>
                            <li>
                            <span>Tag :</span>
                            <span className="s-text text-capitalize"> home, cloth</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <ProductDescription/>
        <RelatedProduct/>
    </>
  );
}
