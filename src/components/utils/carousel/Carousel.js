import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css"

export default function Carousel({items, slides=3, responsive=[[1024,3], [800,2], [480,1]]}) {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        initialSlide: 0,
        customPaging: function (i) {
            return <div className="dot"></div>;
        },
        dotsClass: "slick-dots slick-thumb",
        responsive: responsive.map((bp) => {
          return {
            breakpoint: bp[0],
            settings: {
              slidesToShow: bp[1],
              slidesToScroll: 1,
            }
          }
        })
        // [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: slides,
        //       slidesToScroll: 1,
        //     }
        //   },
        //   {
        //     breakpoint: 800,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
    };
    return (
        <div>
            <Slider {...settings}>
                {items.map((item) => {
                    return (
                        <div className="carousel-item">
                            {item}
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}
