import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import CustomAlert from "./timeout";

function Register({ setOpenRegister}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const[showAlert, setshowAlert]= useState("")

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/register", {
        username,
        email,
        password
      });

      if (res.data === "exist") {
        setshowAlert("User already exists");
      } else if (res.data === "notexist") {
        setshowAlert("Successfully registered")
        setOpenRegister(prev => !prev)
        navigate("/", { state: { id: username } });
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
        setshowAlert(`Server error: ${error.response.data}`);
      } else if (error.request) {
        console.log("Error request:", error.request);
        setshowAlert("No response received from server. Please try again later.");
      } else {
        console.log("Error message:", error.message);
        setshowAlert(`Error: ${error.message}`);
      }
      console.log("Error config:", error.config);
    }
  }

  const closeAlert = () => {
    setshowAlert("");
  };
  return (
    <div className="item-center justify-center rounded-b-md p-[30px_100px_30px] text-sm text-white font-sans bg-gradient-to-r from-blue-600 via-blue-500 to-white shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      {showAlert && <CustomAlert message={showAlert} onClose={closeAlert} />}
      <h4 className="text-black text-center mt[-2rem]">Join Us</h4>
      <form action="">

        <div className="flex">
          <img src="/images/user.png" alt="" className="h-[1.5rem] mt-[6px]" />
          <input
            type="text"
            className="w-[17.7rem] rounded-[15px] border border-white h-[2rem] pl-4 bg-transparent text-black"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username...."
          />
        </div>

        <br />

        <div className="flex">
          <img src="/images/email.png" alt="" className="h-[1.5rem] mt-[6px]" />
          <input
            type="email"
             className="w-[17.7rem] rounded-[15px] border border-white h-[2rem] pl-4 bg-transparent text-black"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email...."
          />
        </div>

        <br />

        <div className="flex">
          <img src="/images/padlock.webp" alt="" className="h-[1.5rem] mt-[6px]" />
          <input
            type="password"
             className="w-[17.7rem] rounded-[15px] border border-white h-[2rem] pl-4 bg-transparent text-black"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password...."
          />
        </div>

        <div className="flex ml-[1.5rem]">
          <input type="checkbox" name="" className="mb-[12px]" /> &nbsp;
          <p className="mt-[7px]">Remember me</p>
        </div>
        <button type="submit" className="log ml-[1.5rem]" onClick={submit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
