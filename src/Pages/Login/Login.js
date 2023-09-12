import React from 'react'
import { useState } from 'react';
import img from "../Images/Rectangle 4365.png";
import loginService from '../../Services/Login/loginService';
import loginLogo from "../Images/loginLogo.png";

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
          setErrormessage("");
          const loginDataApi = {
            username: loginData.username,
            password: loginData.password,
          }
          try {
            const response = await loginService(loginDataApi);
            console.log(response);
            
          } catch (error) {
            console.error(error)
            
          }
           
          
             }
           
          
      }
  return (
    <>
     <div className="flex top-0 left-0 w-full justify-center fixed items-center h-screen dhamilo">
      <div className=" backgroundImg2 w-[770px] w-[750px] h-[500px] flex ">


      <div className="text-right ">


{/* 2nd pat of image  */}
{/* <button >
  <i className="absolute text-right top-[120px]  text-2xl focus:text-yellow-50 text-black   fa-solid fa-xmark"></i>
</button> */}
<img className=" h-full w-[480px]" src={img} alt="" />
</div>

        {/* ist one */}
        <div className="justify-center flex-col w-[60%] p-5 flex">
          <div className="mb-4">
            <img className="" src="" alt="" />
          </div>
          <div className='flex items-center justify-center'>
            <img className=' w-[60%]' src={loginLogo} alt="" />
          </div>

          <div className=" text-center  rounded-lg alert-danger" role="alert">
            {errorMessage}
          </div>

          <div className='h-[300px]'>
            <label className="text-black mb-3">Username</label>
            <br />
            <input
              className=" w-full bg-[#e4000036] h-[30px] rounded-lg outline-none border-black"
              type="text"
              placeholder="  Your Username"
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
              className="rounded-lg bg-[#e4000036] h-[30px] w-full border-t-0  border-black outline-none"
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
              <p className="text-[#EC2633]">
                <a href="#">Forget Password?</a>
              </p>
            </div>
            <div className="mt-3 text-center w-full ">
              <button
                onClick={handelClick}
                className=" hover:bg-[#5672d7] bg-[#EC2633] active:bg-[#88b7ed] w-full py-2 rounded-lg text-white "
              >
                Login
              </button>
            </div>
            <div className="flex mt-4 justify-between w-[9">
              <p>Don't have an account?</p>
              <a to="#">
                <button  className="text-[#EC2633]">
                  Register?
                </button>
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </div></>
  )
}

export default Login;
