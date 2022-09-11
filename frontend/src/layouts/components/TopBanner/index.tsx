import * as React from 'react';

export interface TopBannerProps {
}

export function TopBanner (props: TopBannerProps) {
  return (
    <div className="breadcrumb-bg pt-150 pb-150" data-background="img/all-bg/papyrus.png" style={{backgroundImage: 'url("/img/all-bg/papyrus.png")'}}>
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="page-title text-center">
                <h1>Shop</h1>
                <div className="breadcrumb-menu mt-20">
                    <ul className="trail-items">
                    <li className="trail-item trail-begin">
                        <a href="/">Home</a>
                    </li>
                    <li className="trail-item trail-end">
                        <span>Products</span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}
