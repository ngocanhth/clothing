import { accessories, shopwomans, summerdress } from '@/assets';
import * as React from 'react';

export interface NewArrivalProps {
}

export default function NewArrival (props: NewArrivalProps) {
  return (
    <section>
        <div className="collection-area pb-70">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="collection-box">
                    <img src={shopwomans} alt="collection-image" />
                    <div className="content">
                        <span>Top Collection</span>
                        <h3>SHOP WOMANS</h3>
                        <a className="link-btn" href="/shop-right-sidebar-1/">
                        <i className="fas fa-store" /> SHOP NOW </a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="collections-list">
                    <div className="collection-box">
                        <img src={accessories} alt="collection-image" />
                        <div className="content style-two">
                        <span>New Arrival</span>
                        <h3>ACCESSORIES</h3>
                        <a className="link-btn" href="/shop-right-sidebar-1/">
                            <i className="fas fa-store" /> SHOP NOW </a>
                        </div>
                    </div>
                    <div className="collection-box">
                        <img src={summerdress} alt="collection-image" />
                        <div className="content style-three">
                        <span>New Arrival</span>
                        <h3>SUMMER DRESS</h3>
                        <a className="link-btn" href="/shop-right-sidebar-1/">
                            <i className="fas fa-store" /> SHOP NOW </a>
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
