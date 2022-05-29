import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-20 w-10/12 mx-auto">
        <div className="h-3/4 my-auto">
          <h1 className="text-2xl font-bold hover:text-primary mb-10">
            Contact Information
          </h1>
          <p className="hover:text-primary mb-5">
            <div className=" border-l-4 border-primary pl-3">
              Stock Building, <br /> 125 Main Street 1st Lane, <br /> San
              Francisco, USA
            </div>
          </p>
          <p className="hover:text-primary mb-5">
            <div className=" border-l-4 border-primary pl-3">
              (001)7777 377 977 <br /> (001) 8888 569 8888
            </div>
          </p>
          <p className="hover:text-primary">
            <div className=" border-l-4 border-primary pl-3">
              muhammadrifathasan9869@gmail.com muhammadrifathasan9869@yahoo.com
            </div>
          </p>
        </div>
        <div>
          <h1 className="text-2xl hover:text-primary font-bold">
            Leave Your Message
          </h1>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-primary w-full max-w-xs mt-7"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered input-primary w-full max-w-xs my-8"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs mb-4"
          />
          <br />
          <textarea
            className="textarea input-bordered input-primary mb-5"
            placeholder="Your Message"
          ></textarea>{" "}
          <br />
          <button className="uppercase btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
