import React, { PropsWithChildren } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CardGrid({ children }: PropsWithChildren) {
  return (
    <div className="w-full overflow-hidden">
      <div className="slider-container w-[150%] sm:w-full">
        <Slider
          slidesToShow={5}
          rows={2}
          swipe={false}
          infinite={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                rows: 1,
                swipe: true,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                rows: 1,
                swipe: true,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {children}
        </Slider>
      </div>
    </div>
  );
}
