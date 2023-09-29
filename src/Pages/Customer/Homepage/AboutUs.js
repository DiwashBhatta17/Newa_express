import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
    return (
        <div className="backgroundImg1 min-h-screen p-4">
            <div className="max-w-screen-md mx-auto">
                <h1 className="text-3xl font-bold text-center mb-4">Newari Food</h1>

                {/* Introduction */}
                <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
                    <div className="md:w-1/2">
                        <img
                            src="https://i0.wp.com/s3.tipsnepal.com/2020/08/newari-food.jpg?fit=1080%2C663&quality=100&strip=all&ssl=1"
                            alt="Introduction to Newari Food"
                            className="w-full rounded-md shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold mb-2">Introduction to Newari Food</h2>
                        <p>
                            Newari food is renowned for its rich history and unique flavors. It has been a staple of Newari culture for generations.
                            This cuisine reflects the cultural diversity and culinary creativity of the Newar community.
                            It is often associated with festivals, celebrations, and traditional gatherings.
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
                            src="https://i0.wp.com/s3.tipsnepal.com/2020/08/594046f3bae8a25175397b37.jpg?w=360&quality=100&strip=all&ssl=1"
                            alt="Popular Newari Dishes"
                            className="w-full rounded-md shadow-md"
                        />
                    </div>
                </div>

                {/* Cultural Significance */}
                <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
                    <div className="md:w-1/2">
                        <img
                            src="https://i0.wp.com/s3.tipsnepal.com/2020/08/yomari-punhi-festival-nepal-2019.jpg?resize=768%2C432&quality=100&strip=all&ssl=1"
                            alt="Cultural Significance of Newari Food"
                            className="w-full rounded-md shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold mb-2">Cultural Significance</h2>
                        <p>
                            Newari food holds immense cultural significance within the Newar community. It plays a central role in various festivals
                            and rituals, such as New Year's celebrations and wedding ceremonies. Each dish carries its own symbolism and tradition,
                            making Newari cuisine an integral part of the culture's identity.
                        </p>
                    </div>
                </div>

                {/* Ingredients and Preparation */}
                <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
                    <div className="md:w-1/2">
                        <img
                            src="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/01/01204919/shutterstock_324427688-4-1024x683.jpg"
                            alt="Ingredients and Preparation of Newari Food"
                            className="w-full rounded-md shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold mb-2">Ingredients and Preparation</h2>
                        <p>
                            Newari cuisine features a unique blend of spices and ingredients that give its dishes their distinctive flavor.
                            Common ingredients include rice, lentils, meat, and various herbs and spices.
                            The preparation often involves intricate techniques that have been passed down through generations.
                        </p>
                    </div>
                </div>

                {/* Regional Variations */}
                <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-semibold mb-2">Regional Variations</h2>
                        <p>
                            Newari cuisine can vary from one Newari community to another. For example, the dishes prepared in the Kathmandu Valley
                            may differ from those in the Bhaktapur or Lalitpur regions. These regional variations offer a diverse culinary experience.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://i0.wp.com/s3.tipsnepal.com/2020/08/98c11e769d737d96d417b3af5853be3a-2-scaled.jpg?resize=768%2C576&quality=100&strip=all&ssl=1"
                            alt="Regional Variations in Newari Food"
                            className="w-full rounded-md shadow-md"
                        />
                    </div>
                </div>
                

                {/* Order Now Button */}
                <div className="text-center">
                    <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md">
                        Order Now
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
