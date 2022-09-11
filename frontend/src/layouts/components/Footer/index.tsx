import { Link } from "react-router-dom";

export interface FooterProps {
}

export function Footer (props: FooterProps) {
  return (
    <footer>
      <div className="footer-area pt-60 pb-55 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget mb-30 ">
                <div className="footer-logo">
                  <Link to="/index">
                    <img src="/img/footer/footer-logo.png" className="img-fluid" alt="Logo" />
                  </Link>
                </div>
                <div className="footer-text mt-45">
                  <h6>Phone: <span> +4.509.120.6705</span>
                  </h6>
                  <h6>Address: <span> 1418 Riverwood Drive, Suite 3245</span>
                  </h6>
                  <span>Cottonwood, CA 96052, United States</span>
                </div>
                <div className="footer-payment mt-40">
                  <span>We Accepts:</span>
                  <Link to="/shop">
                    <img src="/img/footer/payment.png" className="img-fluid" alt="payment" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget mb-30 ">
                <h5>Quick Links</h5>
                <ul className="links">
                  <li>
                    <Link to="/shop">Delivery Information</Link>
                  </li>
                  <li>
                    <Link to="/shop">Sale Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/shop">Returns &amp; Refunds</Link>
                  </li>
                  <li>
                    <Link to="/shop">Privacy Notice</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shopping FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget mb-30 ml-50 ">
                <h5>Popular Categories</h5>
                <ul className="links">
                  <li>
                    <Link className="text-capitalize" to="/shop/category/home">home (8)</Link>
                  </li>
                  <li>
                    <Link className="text-capitalize" to="/shop/category/accessories">accessories (8)</Link>
                  </li>
                  <li>
                    <Link className="text-capitalize" to="/shop/category/furniture">furniture (10)</Link>
                  </li>
                  <li>
                    <Link className="text-capitalize" to="/shop/category/covid">covid (6)</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget mb-30 ">
                <h5>Subscription Offer</h5>
                <div className="subscription ">
                  <form action="" className="mb-20">
                    <input type="email" placeholder="Enter Email ID" />
                    <button type="submit">SEND</button>
                  </form>
                  <p>Sign up to receive updates, promotions, and sneak peaks of upcoming products.</p>
                  <div className="social-icon pt-15">
                    <span>Follow Us On:</span>
                    <Link to="/shop">
                      <i className="fab fa-facebook-square" />
                    </Link>
                    <Link to="/shop">
                      <i className="fab fa-twitter-square" />
                    </Link>
                    <Link to="/shop">
                      <i className="fab fa-linkedin" />
                    </Link>
                    <Link to="/shop">
                      <i className="fab fa-pinterest-square" />
                    </Link>
                    <Link to="/shop">
                      <i className="fab fa-youtube-square" />
                    </Link>
                    <Link to="/shop">
                      <i className="fab fa-behance-square" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-two  copyright-border">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="copyright-text">
                <span>© 2022 Retro Theme. Made with passion by themeian.</span>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="copyright-text text-end">
                <span>All Right Reserved By themeian.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
