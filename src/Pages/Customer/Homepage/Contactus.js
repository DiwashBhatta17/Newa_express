import React from "react";
import contactUs from "../../Images/RestroPageImage/image8.png";
import CustomerNavbar from "../customerNavbar";

function Contactus() {
  return (
    <>
      <CustomerNavbar />
      <div className="backgroundImg1 min-h-screen flex flex-col justify-center items-center">
        <div className="mb-8">
          <img
            src={contactUs}
            alt="Contact Us"
            className="h-[90px] mt-[170px] "
          />
        </div>
        <div className="text-3xl font-bold mb-4">Contact Newa Express</div>
        <div className="flex flex-col md:flex-row gap-8 md:w-4/5">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold mb-2">Contact Information</h2>

            <div className="text-3xl">
              <div className="flex items-center mb-2">
                <span className="text-red-700 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </span>
                Trade Tower, Kathmandu
              </div>
              <div className="flex items-center mb-2">
                <span className="text-red-700 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </span>
                Newaexpress@gmail.com
              </div>
              <div className="flex items-center">
                <span className="text-red-700 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </span>
                +977 9712124123
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
            <form className="bg-white p-6 rounded-xl shadow-lg border-red-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-red-700">Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-red-700">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-red-700">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-red-700">Message</label>
                  <textarea
                    type="text"
                    placeholder="Message"
                    required
                    rows="5"
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded-lg mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
