
export interface ProductDescriptionProps {
}

export function ProductDescription (props: ProductDescriptionProps) {
  return (
    <section className="pro-desc-area">
        <div className="container">
            <div className="pro-tab-border">
            <div className="row">
                <div className="col-lg-3">
                <nav className="nav" role="tablist">
                    <div className="nav pro-desc-tab" id="nav-tab" role="tablist">
                    <a role="tab" data-rb-event-key="dec" aria-selected="true" className="c-pointer nav-link active">Description</a>
                    <a role="tab" data-rb-event-key="review" aria-selected="false" className="c-pointer nav-link">Reviews (4)</a>
                    </div>
                </nav>
                </div>
                <div className="col-lg-9">
                <div className=" pro-desc-tab-content tab-content">
                    <div role="tabpanel" aria-hidden="false" className="fade tab-pane active show">
                    <div className="desc-img-wrapper">
                        <div className="pro-desc-single">
                        <div className="row g-0">
                            <div className="col-lg-10 col-width-20">
                            <div className="pro-desc-text">
                                <h4>Specticle Glasses</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam,</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div role="tabpanel" aria-hidden="true" className="fade tab-pane">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
  );
}
