import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = {
  latestVendors: [
    {
      short: "defaulterVendor",
      latestVendorId: 1,
      name: "Shraddha",
    },
    {
      short: "defaulterVendor",
      latestVendorId: 2,
      name: "dateapp",
    },
    {
      short: "warner",
      latestVendorId: 3,
      name: "Warner",
    },
    {
      short: "vintageCharm",
      latestVendorId: 4,
      name: "Vintage Charm",
    },
    {
      short: "rimberio",
      latestVendorId: 5,
      name: "Rimberio",
    },
    {
      short: "laranaInc",
      latestVendorId: 6,
      name: "Larana, Inc",
    },
    {
      short: "faugetShop",
      latestVendorId: 7,
      name: "Fauget Shop",
    },
    {
      short: "envine",
      latestVendorId: 8,
      name: "Envine",
    },
    {
      short: "shopy",
      latestVendorId: 9,
      name: "Shopy",
    },
  ],
};
const LatestVendor = () => {
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
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className=" col-span-8 col-start-3 ">
        <div id="caroulesVendor" className="grid grid-cols-1">
          <div className="w-full m-auto ">
            <div className="mt-20">
              <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-11">
                <div className=" text-3xl font-semibold px-5 pb-11">
                  Latest Vendor
                </div>
                <div className="pt-2 col-span-1 col-start-2 md:col-start-4  ">
                  <button className="border-2 hover:bg-gray-200 w-28 h-10 ">
                   
                    View all
                  </button>
                </div>
              </div>
              <div className="slider-container">
                <Slider {...settings}>
                  {data.latestVendors.map((latestVendor) => (
                    <div
                      key={latestVendor.latestVendorId}
                      className="bg-white h-[400px] mx-1 border-2 text-black rounded-xl"
                    >
                      <div className="h-56 rounded-t-xl flex justify-center items-center">
                        <img
                          src={`/images/${latestVendor.short}.png`}
                          alt={latestVendor.short}
                          className="rounded-full h-44 w-44 "
                        />
                      </div>
                      <div className=" flex flex-col  justify-center items-center gap-4 p-4 ">
                        <div className="text-xl font-semibold">
                          {latestVendor.name}
                        </div>
                        <div className="bg-yellow-400 text-white text-center col-span-1 col-start-3">
                          Vendor
                        </div>
                        <button className="bg-white text-lg border-black hover:bg-black hover:text-white w-52 ">
                          Visit Vendor
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVendor;
