import React from "react";
const data = {
  services: [
    {
      serviceId: 1,
      short: "searchOrList",
      name: "Search or List",
      details:
        "Search for the item you want to buy or list the item you want to sell.",
    },
    {
      serviceId: 2,
      short: "connect",
      name: "Connect",
      details:
        "Contact the buyer or seller to negotiate and finalize the transaction.",
    },
    {
      serviceId: 3,
      short: "completeTheTransaction",
      name: "Complete the transaction",
      details:
        "Complete the transaction by making payments, or meeting in person.",
    },
  ],
};
const HowItWork = () => {
  return (
    <div className="bg-stone-800 grid xs:grid-cols-1 text-white">
      <span className="text-4xl  text-center py-5 font-bold">How IT Work</span>
      <div className="grid md:grid-cols-3 grid-cols-1  md:px-96 md:gap-24 ">
        {data.services.map((service,i) => (
          <>
            <div
              key={service.serviceId}
              id="card"
              className="rounded-xl bg-stone-600 mb-5 m-2  mt-5 md:w-96  h-96  "
            >
              <div className="px-24">
                <img
                  className=" scale-90 hover:scale-100 transition duration-500 object-none object-center  h-48 "
                  src={`/images/${service.short}.png`}
                  alt=""
                />
              </div>
              <div className="content-center font-bold  text-xl h-16 text-center">
                {service.name}
              </div>
              <div className="content-center font-light text-xl h-16 px-5 text-center">
                {service.details}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
