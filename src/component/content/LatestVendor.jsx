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
const LatestVendor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="bg-black text-black" />,
    prevArrow: <SamplePrevArrow />,
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
              <Slider {...settings}>
                {data.latestVendors.map((latestVendor) => (
                 
                    <div
                      key={latestVendor.latestVendorId}
                      className="bg-white h-[400px] mx-1 border-2 text-black rounded-xl"
                    >
                      <div className="h-56 rounded-t-xl flex justify-center items-center">
                        <img
                          src={`/src/assets/images/${latestVendor.short}.png`}
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
        <div id="featuredItems" className="grid grid-cols-1 mt-20">
          <div className="grid grid-cols-6 bg-gray-300 gap-2">
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
            <div className="col-span-4 ">
              <div className="w-full ">
                <Slider className="my-10" {...settings}>
                    {
                        data.featuredItems.map((featuredItem)=>(
                           <>
                            <div key={featuredItem.featuredItemsId} className="h-56 mx-1 ">
                                <div>
                                    <img src={`/src/assets/images/${featuredItem.short}.png`} alt="" className="object-cover h-48" />
                                </div>
                                <div className="bg-white font-semibold text-lg">${featuredItem.priceEnable}</div>


                            </div>
                           </>
                        ))
                    }
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
