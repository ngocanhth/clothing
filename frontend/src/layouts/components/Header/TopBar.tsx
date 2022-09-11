import * as React from 'react';

export interface ITopBarProps {
}

export function TopBar (props: ITopBarProps) {
  return (
        <div className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <p>Miễn phí ship hàng toàn quốc</p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="top-header-info">
                    <div className="d-flex align-items-center justify-content-end lh-1">
                        <ul className="social-links">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/" target="_blank">
                            <i className="fab fa-pinterest-p" />
                            </a>
                        </li>
                        </ul>
                        <div className="language-switcher" id="language-switcher">
                        <span>Language</span>
                        <ul className="drop">
                            <li>
                            <a className="active" href="/#">English - EN</a>
                            </li>
                            <li>
                            <a href="/#">عربى - AR</a>
                            </li>
                            <li>
                            <a href="/#">中国人 - ZH</a>
                            </li>
                            <li>
                            <a href="/#">Deutsch - DE</a>
                            </li>
                            <li>
                            <a href="/#">rעברית - HE</a>
                            </li>
                            <li>
                            <a href="/#">Español - ES</a>
                            </li>
                        </ul>
                        </div>
                        <div className="currency-switcher" id="currency-switcher">
                        <span>Currency</span>
                        <ul className="drop">
                            <li>
                            <a className="active" href="/#">$USD</a>
                            </li>
                            <li>
                            <a href="/#">€EUR</a>
                            </li>
                            <li>
                            <a href="/#">$FJD</a>
                            </li>
                            <li>
                            <a href="/#">£FKP</a>
                            </li>
                            <li>
                            <a href="/#">£GBP</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  );
}
