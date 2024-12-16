import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomAlert from "./timeout";
import Register from "./Register";

function Login({ setOpenLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openRegister, setOpenRegister] = useState(false);
  const [showAlert, setshowAlert] = useState("");

  const handleRegister = () => {
    setOpenRegister((prev) => !prev);
  };

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/", {
        username,
        password,
      });
      if (res.data === "exist") {
        setshowAlert("Done");
        setOpenLogin((prev) => !prev);
        navigate("/", { state: { id: username } });
      } else if (res.data === "notexist") {
        setshowAlert("User not registered");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
        setshowAlert(`Server error: ${error.response.data}`);
      } else if (error.request) {
        console.log("Error request:", error.request);
        setshowAlert(
          "No response received from server. Please try again later."
        );
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
    <div className="item-center justify-center rounded-b-md p-[30px_100px_30px] text-sm text-white font-sans bg-gradient-to-r from-blue-600 via-blue-500 to-white shadow-[0_0_10px_rgba(0,0,0,0.2)]]">
      {showAlert && <CustomAlert message={showAlert} onClose={closeAlert} />}
      <form action="" onSubmit={submit}>
        <div className="flex">
          <img src="/images/user.png" alt="" className="h-[1.5rem] mt-[6px]" />
          <input
            type="text"
            className="w-[17.7rem] rounded-[15px] border border-white h-[2rem] pl-4 bg-transparent text-black"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username...."
            value={username}
          />
        </div>

        <br />

        <div className="flex">
          <img
            src="/images/padlock.webp"
            alt=""
            className="h-[1.5rem] mt-[6px]"
          />
          <input
            type="password"
            className="w-[17.7rem] rounded-[15px] border border-white h-[2rem] pl-4 bg-transparent text-black "
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password...."
            value={password}
          />
        </div>

        <div className="flex ml-[1.5rem]">
          <input type="checkbox" className="mb-[12px]" /> &nbsp;
          <p className="mt-[7px]">Remember me</p>
          <a
            href="pass"
            className="text-[rgb(47,47,146)] border-none bg-blue underline ml-[1.5rem] mt-[7px]"
          >
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="log ml-[1.5rem]">
          Login
        </button>
      </form>

      <p className="ml-[2rem]">
        Don't have an account?{" "}
        <button
          className="text-[rgb(47,47,146)] border-none bg-blue underline ml-[1.5rem]"
          onClick={handleRegister}
        >
          Register
        </button>
      </p>
      <Modal
        show={openRegister}
        onHide={handleRegister}
        size=""
        className="modal"
      >
        <div className="rounded-t-[5px] text-center bg-gradient-to-r from-white via-blue-500 to-blue-600 flex gap-[4.5rem]">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-soccer-logo_23-2149362229.jpg?t=st=1734202288~exp=1734205888~hmac=82dfde33464c448865ddfdb6d9c0db211e52afc385739bf978b34006fe8ba933&w=740"
            alt="logo"
            className="h-[3.2rem] rounded-[5px]"
          />
          <h1 className="text-black text-center">Odds Hub</h1>
        </div>
        <Register setOpenRegister={setOpenRegister} />
      </Modal>
    </div>
  );
}

export default Login;
