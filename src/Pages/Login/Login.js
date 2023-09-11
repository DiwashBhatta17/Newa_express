import React from 'react'
import { useState } from 'react';

function Login() {

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
        checkbox: false,
      });
      console.log(loginData);
    
      const [errorMessage, setErrormessage] = useState("");
    
      async function handelClick() {
        if (loginData.username == "") {
          setErrormessage("Username cant be empty!");
        } else if (loginData.password == "") {
          setErrormessage("password cant be empty!");
        } else {
          const loginDataApi = {
            username: loginData.username,
            password: loginData.password,
          };
    
          
            setErrormessage("");
           
            
    
            // Redirect based on user's role
            // if (user.role === "ROLE_PATIENT") {
            //   if(redirect != null){
            //     navigate(redirect);
            //   }
            //   else if(re != null){
            //     navigate(re);
            //   }
    
            //   else{
                
    
               
              
             
              
        //     } else if (user.role === "ROLE_DOCTOR") {
        //       if(user.verified){
        //         navigate("/doctordashboard");
    
        //       }
              
        //       sessionStorage.setItem("userId", user.doctorId);
              
        //     }
        //     else if (user.role === "ROLE_ADMIN") {
        //       navigate("/Admindashboard");
        //       sessionStorage.setItem("userId", user.adminId);
        //   } 
            
        //   }
        //    catch (error) {
        //     console.log(error.response.data);
        //     if(error.response.data.message==='NOT VERIFIED DOCTOR'){
        //       navigate("/waiting");
        //       console.log("working")
    
        //     }else{
        //        setErrormessage("Invalid Username");
    
             }
           
          
      }
  return (
    <>
     <div className="flex top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" bg-white w-fit flex p-5">
        <div className="justify-center flex-col w-[45%] flex">
          <div className="mb-4">
            <img className="" src="" alt="" />
          </div>

          <div className=" text-center  rounded-lg alert-danger" role="alert">
            {errorMessage}
          </div>

          <div>
            <label className="text-black mb-3">Username</label>
            <br />
            <input
              className="border-b-[1px] w-full outline-none border-black"
              type="text"
              placeholder="Your Username"
              name="username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            ></input>
            <br></br>
            <label className="mt-3 mb-3" htmlFor="">
              Password
            </label>
            <br />
            <input
              className="border-b-[1px] w-full border-t-0  border-black outline-none"
              type="password"
              name="password"
              placeholder=" ******************"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />{" "}
            <br />
            <br />
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  checked={loginData.checkbox} // Use "checked" instead of "value" for checkboxes
                  onChange={(e) =>
                    setLoginData({ ...loginData, checkbox: e.target.checked })
                  }
                />

                <p>Remember Me?</p>
              </div>
              <p className="text-[#2181F1]">
                <a href="#">Forget Password?</a>
              </p>
            </div>
            <div className="mt-3 text-center w-full ">
              <button
                onClick={handelClick}
                className=" hover:bg-[#5672d7] bg-[#2182f1c4] active:bg-[#88b7ed] w-full py-2 rounded-lg text-white "
              >
                Login
              </button>
            </div>
            <div className="flex mt-4 justify-between w-[9">
              <p>Don't have an account?</p>
              <a to="#">
                <button  className="text-[#2181F1]">
                  Register?
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="text-right pl-6">
          <button >
            <i className="absolute text-right top-[120px]  text-2xl focus:text-yellow-50 text-black   fa-solid fa-xmark"></i>
          </button>
          <img className="w-[450px]" src='' alt="" />
        </div>
      </div>
    </div></>
  )
}

export default Login;