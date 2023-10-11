import React, { useEffect, useRef, useState } from "react";
import logo from "../../Images/Logo.png";
import profileService from "../../../Services/CustomerService/profileService";
import { getPic } from "../../../Services/CustomerService/profilePicService";
import { uploadPic } from "../../../Services/CustomerService/profilePicService";

function CustomerProfile() {
  const [data, setData] = useState({});
  const [pip, setPip] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  




  const userId = localStorage.getItem("customerId");

  async function handleUpload() {
    if (selectedImage) {
      console.log("seectImage" ,selectedImage);
      try {
        const formData = new FormData();
        formData.append('image', selectedImage);
       

        const response = await uploadPic(formData) 
        console.log("res", response);
      } catch (error) {
        console.error("Error uploadin img", error);
      }
    } else {
      console.log("No image selected");
    }
  }

  
  useEffect(()=>{
    handleUpload();
  },[selectedImage])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await profileService(userId);
        const res2 = await getPic(userId);
        setPip(res2);
        console.log("res2", res2);

        setData(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (userId) {
  }
  function handleFileSelect(e){
    setSelectedImage(e.target.files[0]);


  }

  return (
    <div className="flex justify-around w-[] gap-4">
      {/* item goes in this div  */}

      <div className=" flex items-center mt-4 flex-col ">
       <button onClick={() => inputRef.current.click()}> <img className="w-auto h-[150px] rounded-full" src={pip || logo} alt="" /></button>
        <input type="file" ref={inputRef} accept="image/*" style={{display: "none"}} onChange={handleFileSelect} />
        <h1 className="text-black text-xl font-bold">{data.customerName}</h1>
      </div>
      <div className="flex w-[60%] items-start mt-5 flex-col">
        <label>Name</label>
        <input
          className="border-1 border-black rounded-lg bg-[#e0dcdcc1]"
          type="text"
        />
        <label className="mt-3" htmlFor="">
          Email
        </label>
        <input
          className="border-1 border-black rounded-lg bg-[#e0dcdcc1]"
          type="text"
        />
        <label className="mt-3" htmlFor="">
          Phone
        </label>
        <input
          className="border-1 border-black rounded-lg bg-[#e0dcdcc1]"
          type="text"
          name=""
          id=""
        />

        <button className="border mt-5 px-2 py-1 bg-[#38cf2a] text-white rounded-lg">
          Save Changes
        </button>
      </div>

      {/* Inside This */}
    </div>
  );
}

export default CustomerProfile;
