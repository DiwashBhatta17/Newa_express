import React from "react";
import Footer from "../../Footer";

export default function Restcomponent() {
  return (
    <div className="middlepart ">
      <div className="banner mt-[20px] ml-[70px]">
        <img src="/Image/banner.gif" alt="banner" className="w-[1100px]" />
      </div>

      <div className="menucontainer h-[600px] flex">
        <img
          src="/Image/Vector.png"
          alt=""
          className="vector mt-[60px] w-[800px] h-[80px] ml-[220px]"
        />
        <img
          src="/Image/musician .png"
          alt=""
          className="musi h-[200px] ml-[-960px] mt-[40px]"
        />
        <img
          src="/Image/musician1.png"
          alt="art"
          className="h-[200px] ml-[900px] mt-[40px]"
        />
        <p className="fooddescpt ml-[-730px] text-[28px] text-[white] font-bold mt-[60px]  ">
          Cultural and Festive Foods{" "}
        </p>
        <img
          src="/Image/samay.png"
          alt="samaybaji"
          className="samay h-[190px] mt-[270px] ml-[-690px]"
        />
        <p className="names mt-[470px] ml-[-170px]">Samay Baji</p>
        <img
          src="/Image/yomarichi.png"
          alt="Yomari"
          className="yomari h-[190px] mt-[270px] ml-[200px]"
        />
        <img
          src="/Image/sapuicha.png"
          alt="sapumicha"
          className="sapui h-[190px] mt-[270px] ml-[130px]"
        />
        <img
          src="/Image/Line 3.png"
          alt="line"
          className="h-[3px] mt-[540px] ml-[-900px] w-[300px]"
        />
        <div className="nextbt bg-[#ff2b2b] w-[50px] h-[50px] mt-[520px] shadow-md shadow-white">
          <img
            src="/Image/next.png"
            alt="previous"
            className="mt-[10px] ml-[12px]"
          />
        </div>
        <div className="nextbt bg-[#c2a12a] w-[50px] h-[50px] ml-[40px] mt-[520px] shadow-md shadow-white">
          <img
            src="/Image/nextr.png"
            alt="previous"
            className="mt-[10px] ml-[12px]"
          />
        </div>
        <img
          src="/Image/Line 3.png"
          alt="line"
          className="h-[3px] mt-[540px] ml-[0px] w-[300px]"
        />{" "}
      </div>

      <div className="featuredContainer h-[440px] mt-[25px] flex">
        <img
          src="/Image/vector.png"
          alt="topic"
          className="featuredhotels  w-[800px] h-[80px] ml-[220px] mt-[24px]"
        />
        <p className="ftrest mt-[30px] text-[white] text-[30px] font-semibold ml-[-520px]">
          {" "}
          Featured Restaurants
        </p>
        <img
          src="/Image/samay.png"
          alt="logo"
          className="h-[190px] mt-[150px] ml-[-680px]"
        />
        <img
          src="/Image/logo1.png"
          alt="logo1"
          className="h-[80px] mt-[300px] ml-[-170px]"
        />
        <img
          src="/Image/sapuicha.png"
          alt="logo"
          className="h-[190px] mt-[150px] ml-[240px]"
        />
        <img
          src="/Image/logo2.png"
          alt="logo"
          className="h-[80px] mt-[300px] ml-[-160px]"
        />
        <img
          src="/Image/yomarichi.png"
          alt="logo"
          className="h-[190px] mt-[150px] ml-[240px]"
        />
        <img
          src="/Image/logo3.png"
          alt="logo"
          className="h-[80px] mt-[300px] ml-[-160px] "
        />
      </div>
      <div className="reviewSection h-[250px] mt-[40px] flex border-2 border-red-600">
        <p className="text-[#ff1414] ml-[560px] font-bold text-[20px] mt-[10px]">
          Customer Reviews
        </p>
        <img
          src="/Image/next.png"
          alt="next"
          className="h-[40px] mt-[120px] ml-[-590px] hover:h-[42px] "
        />
        <div className="reviews bg-[#EC2633] w-[360px] h-[100px] rounded-[30px] mt-[80px] ml-[100px]"></div>
        <div className="reviews bg-[#EC2633] w-[360px] h-[100px] rounded-[30px] mt-[80px] ml-[100px]"></div>
        <img
          src="/Image/nextr.png"
          alt="next"
          className="h-[40px] mt-[120px] ml-[100px] hover:h-[44px]"
        />
      </div>

      <div className="aboutus h-[400px] mb-[250px]">
        <img
          src="/Image/vector2.png"
          alt="aboutus"
          className="mt-[150px] ml-[100px]"
        />
        <p className="text-[white] font-semibold mt-[-70px] ml-[190px] text-[28px]">
          About
        </p>
        <img
          src="/Image/ourbg.png"
          alt="photo"
          className="mt-[-200px] ml-[240px]"
        />
        <p className="mt-[-350px] w-[300px] ml-[100px] font-bold">
          At Newa Express, we are your gateway to the rich and delectable world
          of Newari cuisine. Our mission is simple: to bring the authentic
          flavors of Newari food from the heart of the Valley straight to your
          doorstep.
        </p>
        <p className="mt-[50px] w-[300px] ml-[100px] font-bold">
          We have carefully curated a selection of renowned Newari restaurants,
          each known for their dedication to preserving the centuries-old
          traditions and recipes that make Newari cuisine so unique. Our team is
          passionate about ensuring that you experience the true essence of
          Newari culture and culinary heritage with every bite.
        </p>
      </div>
      <Footer />
      {/* <img
        src="/Image/footer.png"
        alt="parda"
        className="h-[990px] w-[1300px] mt-[250px]"
      />
      <div className="details bg-[black] h-[600px] mt-[-800px]">
        <img
          src="/Image/newaExpress.png"
          alt="logo"
          className="h-[260px] ml-[500px] pt-[50px] mt-[20px]"
        />
        <img src="/Image/yellowline.png" alt="dfdsf" className="ml-[40px]" />
        <img
          src="/Image/Row2.png"
          alt="detials "
          className="h-[170px] ml-[140px] mt-[60px]"
        />
      </div> */}
    </div>
  );
}
