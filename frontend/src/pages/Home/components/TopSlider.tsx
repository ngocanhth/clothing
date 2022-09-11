import { slider1, slider2 } from "@/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function TopSlider() {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // adaptiveHeight: true
      };

    return (
        <section>
            <Slider {...settings}>
                <div className="banner-item">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                        <div className="content">
                            <span className="sub-title">New Arrival 2021!</span>
                            <h1>MADE FOR YOU CLOTHING!</h1>
                            <p>Trending from men and women style collection</p>
                            <a className="default-btn" href="/shop-right-sidebar-1/">
                            <i className="fas fa-store" /> SHOP NOW </a>
                        </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                        <div className="image">
                            <img src={slider1} alt="banner-image" />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="banner-item">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                        <div className="content">
                            <span className="sub-title">New Arrival 2021!</span>
                            <h1>MADE FOR YOU CLOTHING!</h1>
                            <p>Trending from men and women style collection</p>
                            <a className="default-btn" href="/shop-right-sidebar-1/">
                            <i className="fas fa-store" /> SHOP NOW </a>
                        </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                        <div className="image">
                            <img src={slider2} alt="banner-image" />
                        </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default TopSlider;