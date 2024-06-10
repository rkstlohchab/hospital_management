import React from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import reviews from "../constants/reviews";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-center">Patient Reviews</h2>
        <div className="mt-8">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4">
                <ReviewCard
                  name={review.name}
                  review={review.review}
                  rating={review.rating}
                  videoUrl={review.videoUrl}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
