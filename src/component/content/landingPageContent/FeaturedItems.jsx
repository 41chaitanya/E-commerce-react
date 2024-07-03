import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = {
  featuredItems: [
    {
      short: "galaxyUltra",
      featuredItemsId: 1,
      name: "Galaxy S23 Ultra",
      priceEnable: 856.0,
      priceDisable: 898.8,
      location: "Yangon",
      discount: 5,
    },
    {
      short: "colourfulGraphicTeesForKids",
      featuredItemsId: 2,
      name: "Colourful Graphic Tees for Kids",
      priceEnable: 30.0,
      priceDisable: null,
      location: "Mandalay",
      discount: null,
    },
    {
      short: "waffleShirt",
      featuredItemsId: 3,
      name: "Waffle Shirt",
      priceEnable: 277.0,
      priceDisable: 307.78,
      location: "Yangon",
      discount: 10,
    },
    {
      short: "acerAspire",
      featuredItemsId: 4,
      name: "Acer Aspire 5",
      priceEnable: 345.0,
      priceDisable: null,
      location: "London",
      discount: null,
    },
    {
      short: "fordRanger",
      featuredItemsId: 5,
      name: "Ford Ranger",
      priceEnable: 43525.0,
      priceDisable: null,
      location: "Yangon",
      discount: null,
    },
    {
      short: "luxuryCondoLivingAtTheSky",
      featuredItemsId: 6,
      name: "Luxury Condo living at the sky",
      priceEnable: 250000.0,
      priceDisable: null,
      location: "Singapore",
      discount: null,
    },
  ],
};
const FeaturedItems = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "white",
          display: "block",
          background: "black",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-8 col-start-3">
          <div id="featuredItems" className="grid grid-cols-1 mt-20">
            <div className="grid md:grid-cols-6 grid-cols-2 md:w-auto w-80 bg-gray-300 gap-2">
              <div className="col-span-2">
                <div className="px-12 py-10">
                  <p className="text-2xl font-semibold mb-2">Featured Items </p>
                  <p className="text-xl ">
                    Find something special among our featured items.
                  </p>
                  <button
                    className="bg-black text-white p-2 w-18 mt-4
                "
                  >
                    View All
                  </button>
                </div>
              </div>
              <div className="col-span-4 px-8 ">
                <div className="w-full ">
                  <div className="slider-container ">
                    <Slider className="my-10" {...settings}>
                      {data.featuredItems.map((featuredItem) => (
                        <>
                          <div
                            key={featuredItem.featuredItemsId}
                            className="h-56 mx-1 "
                          >
                            <div>
                              <img
                                src={`/images/${featuredItem.short}.png`}
                                alt=""
                                className="scale-90 hover:scale-100 transition duration-500 object-cover  h-48"
                              />
                            </div>
                            <div className="bg-white font-semibold text-lg scale-90">
                              ${featuredItem.priceEnable}
                            </div>
                          </div>
                        </>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems;
