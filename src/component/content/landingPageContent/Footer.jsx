import React from "react";
// IFpmtQRELzOK9zk6lbL0-Z9PYOvno_e7DboRAI-ZYzFjSGAr
const Footer = () => {
  return (
    <div className="bg-slate-800 text-white grid grid-cols-12">
      <div className=" col-span-8 col-start-3">
        <div className="grid md:grid-rows-5 grid-rows-10 gap-2 grid-flow-col">
          <div className="text-3xl my-5"> Shop</div>

          <div className="text-lg font-light font-sans my-2"> Categories</div>
          <div className="text-lg font-light font-sans my-2"> Latest Posts</div>
          <div className="text-lg font-light font-sans my-2">
            {" "}
            Popular Posts
          </div>
          <div className="text-lg font-light font-sans my-2"> User List</div>

          <div className="text-3xl my-5"> SUPPORT</div>
          <div className="text-lg font-light font-sans my-2"> Contact Us</div>
          <div className="text-lg font-light font-sans my-2"> Safety Tips</div>
          <div className="text-lg font-light font-sans my-2"> Privacy Policy</div>
          <div className="text-lg font-light font-sans my-2"> Terms and Conditions</div>

          <div className="text-3xl my-5"> COMPANY</div>
          <div className="text-lg font-light font-sans my-2"> About Us</div>
          <div className="text-lg font-light font-sans my-2"> Blogs</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
