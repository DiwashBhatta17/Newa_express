import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="backgroundImg1 min-h-screen p-4">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Newari Dishes: A Journey Through Culture and Tradition
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Chhoila</h2>
            <p className="text-xl">
              Chhoila is a culinary masterpiece made from buffalo meat,
              specifically the tender portions. The meat is roasted over an open
              flame, imparting a chewy and smoky flavor. Combined with homemade
              spices and herbs.
            </p>
          </div>
                </div>

                {/* Popular Dishes */}
                <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold mb-2">Popular Newari Dishes</h2>
                        <ul className="list-disc list-inside">
                            <li>Yomari</li>
                            <li>Bara</li>
                            <li>Samay Baji</li>
                            <li>Chatamari</li>
                            <li>Lakhmari</li>
                            <li>Chhyalcha</li>
                            <li>Senla</li>
                            <li>Sapu Mhicha</li>
                        </ul>
                    </div>
          <div className="md:w-1/2">
            <img
              src="https://www.bhaktapur.com/wp-content/uploads/2022/11/chhoila.jpg"
              alt="Regional Variations in Newari Food"
              className="w-full rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
          <div className="md:w-1/2">
            <img
              src="https://nepalicookbook.com/wp-content/uploads/2015/08/black-gram-pancake-maasko-bara.jpg"
              alt="Regional Variations in Newari Food"
              className="w-full rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Bara</h2>
            <p className="text-xl">
              Bara, or Wo in Newari, is a lentil pancake with cultural
              significance. It symbolizes good luck and is often offered as
              "Sagun" during special occasions. These lentils are ground into a
              smooth paste and fried into a pancake-like delicacy. You have the
              freedom to choose your toppings, whether it's meat, eggs, or
              veggies, each offering a unique and alluring taste.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Yomari</h2>
            <p className="text-xl">
              Yomari is a steamed dumpling filled with sweet fillings made from
              ingredients like Chakku or Khoya. It is often served with a
              special pickle for an extra flavor kick. The combination of rice
              flour and sweet fillings creates a consistent, soft, and tender
              delight. Many restaurants offer Yomari at affordable prices,
              ensuring you won't get enough of this heavenly taste.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://www.bhaktapur.com/wp-content/uploads/2021/12/yomari.jpg"
              alt="Regional Variations in Newari Food"
              className="w-full rounded-md shadow-md"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
          <div className="md:w-1/2">
            <img
              src="https://newarirecipeshut.com/wp-content/uploads/2020/09/chatamari-768x512.jpg"
              alt="Regional Variations in Newari Food"
              className="w-full rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Chatamari</h2>
            <p className="text-xl">
              Chatamari, known as the Newari pizza, is a delightful dish. Unlike
              traditional pizza, it features a thin rice flour crust that is
              crispy on the outside and tender on the inside. Topped with a
              variety of delicious ingredients, every bite is a burst of
              irresistible flavors.
            </p>
          </div>
        </div>

        <h1 className="text-3xl font-semibold mb-6 text-center mt-10">
          Cultural Significane
        </h1>

        <div className="flex items-center">
          <p className="text-gray-700 leading-relaxed text-justify px-11 font-semibold text-xl">
            Newari food holds profound cultural significance in Kathmandu,
            Nepal, particularly among the indigenous Newar community. It is an
            integral part of traditional festivals, religious rituals, and
            community gatherings, serving as offerings to deities and
            symbolizing unity. Newari cuisine is a cornerstone of Newar cultural
            identity, with recipes passed down through generations. Its
            influence extends beyond the community, shaping Nepali cuisine as a
            whole. In Kathmandu, restaurants and street food vendors offer
            authentic Newari dishes, contributing to cultural exchange and the
            local economy. Overall, Newari food represents not only sustenance
            but also the rich cultural heritage and communal bonds of
            Kathmandu's Newar residents.
          </p>
        </div>
        <div className="text-center mt-6">
          <p className="text-xl text-red-500 font-semibold">
            Craving Newari food?
          </p>
          <Link to="/">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
