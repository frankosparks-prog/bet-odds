import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import Register from "./Register";

function Footer() {
  const navigate = useNavigate();
  const [setRegisterObj] = useState({});
  const [openRegister, setOpenRegister] = useState(false);
  const handleRegister = (Register) => {
    if (Register) {
      setRegisterObj(Register);
    }
    setOpenRegister((prev) => !prev);
  };

  return (
    <div className="footer text-lg sm:text-base md:text-sm lg:text-lg leading-relaxed sm:leading-normal mt-4">
      <div className="mt-[1px] h-[12rem] w-auto flex items-center justify-center font-serif font-bold gap-[10.5rem] bg-[var(--text)] p-4">
        <a href="#" className="no-underline group">
          <img
            src="\images\facebook.avif"
            alt=""
            className="h-[5rem] w-[5rem] rounded-[5px] transform transition-transform duration-300 group-hover:scale-110"
          />
          <p className="font-sans text-gray-300 font-dancing">facebook</p>
        </a>
        <a href="#" className="no-underline group">
          <img
            src="\images\google.avif"
            alt=""
            className="h-[5rem] w-[5rem] rounded-[5px] transform transition-transform duration-300 group-hover:scale-110"
          />
          <p className="font-sans text-gray-300 font-dancing">google</p>
        </a>
        <a href="#" className="no-underline group">
          <img
            src="\images\instagram2.avif"
            alt=""
            className="h-[5rem] w-[5rem] rounded-[5px] transform transition-transform duration-300 group-hover:scale-110"
          />
          <p className="font-sans text-gray-300 font-dancing">instagram</p>
        </a>
        <a href="#" className="no-underline group">
          <img
            src="\images\tik.avif"
            alt=""
            className="h-[5rem] w-[5rem] rounded-[5px] transform transition-transform duration-300 group-hover:scale-110"
          />
          <p className="font-sans text-gray-300 font-dancing">tiktok</p>
        </a>
        <a href="#" className="no-underline group">
          <img
            src="\images\twitter.avif"
            alt=""
            className="h-[5rem] w-[5rem] rounded-[5px] transform transition-transform duration-300 group-hover:scale-110"
          />
          <p className="font-sans text-gray-300 font-dancing">twitter</p>
        </a>
        <a href="#" className="no-underline group">
          <img
            src="\images\youtube.avif"
            alt=""
            className="h-[5rem] w-[5rem] rounded-[5px] transform transition-transform duration-300 group-hover:scale-110"
          />
          <p className="font-sans text-gray-300 font-dancing">youtube</p>
        </a>
      </div>
      <div className="p-[1rem] text-white-500 bg-black">
        <div className="flex flex-col items-center justify-center">
          <h5 className="w-[20rem] text-white text-center">
            SIGN UP & GET VIP ACCESS AND LATEST PREDICTIONS.
          </h5>

          <button
            className="btnlogin mt-[1rem] "
            onClick={() => handleRegister()}
          >
            Sign Up
          </button>
        </div>

        <Modal
          show={openRegister}
          onHide={() => handleRegister()}
          size={""}
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

        <div className="bg-var[(--text)] flex gap-[20rem] justify-center mt-[3rem] text-[1.3rem]">
          <div className="">
            <h5 className="text-white text-semibold">THE SITE</h5>
            <div className="flex flex-col mt-[1rem] text-gray-500">
              <span>Careers</span>
              <span>Collaborations</span>
              <span>Legal Terms</span>
              <span>Privacy Pospancy</span>
            </div>
          </div>
          <div className="">
            <h5 className="text-semibold text-white">MEMBERSHIP</h5>
            <div className="flex flex-col mt-[1rem] text-gray-500">
              <span>Sign In</span>
              <span>Create Account</span>
              <span>Profile</span>
              <span>History</span>
              <span onClick={() => navigate("/chat")} className="text-current hover:text-[var(--bright-blue)] hover:cursor-pointer">Comment</span>
            </div>
          </div>

          <div className="">
            <h5 className="text-semibold text-white">CONTACT US</h5>
            <div className="flex flex-col mt-[1rem] text-gray-500">
              <span className="flex items-center">
                <img
                  src="\images\phone.avif"
                  alt=""
                  className="h-[1rem] mr-[7px] rounded-[5px]"
                />
                <a
                  href="#"
                  className="text-current hover:text-[var(--bright-blue)] hover:cursor-pointer text-gray-500 no-underline"
                >
                  +254 738380692
                </a>
              </span>
              <span className="flex items-center">
                <img
                  src="\images\facebook.avif"
                  alt=""
                  className="h-[1rem] mr-[7px] rounded-[5px]"
                />
                <a
                  href="#facebook"
                  className="text-current hover:text-[var(--bright-blue)] hover:cursor-pointer text-gray-500 no-underline"
                >
                  Odds Hub
                </a>
              </span>
              <span className="flex items-center">
                <img
                  src="\images\instagram.avif"
                  alt=""
                  className="h-[1rem] mr-[7px] rounded-[5px]"
                />
                <a
                  href="#insta"
                  className="text-current hover:text-[var(--bright-blue)] hover:cursor-pointer text-gray-500 no-underline"
                >
                  @_odds_hub
                </a>
              </span>
              <span className="flex items-center">
                <img
                  src="\images\tiktok.avif"
                  alt=""
                  className="h-[1rem] mr-[7px] rounded-[5px]"
                />
                <a
                  href="#tiktok"
                  className="text-current hover:text-[var(--bright-blue)] hover:cursor-pointer text-gray-500 no-underline"
                >
                  @_odds_hub
                </a>
              </span>
              <span className="flex items-center">
                <img
                  src="\images\twitter.avif"
                  alt=""
                  className="h-[1rem] mr-[7px] rounded-[5px]"
                />
                <a
                  href="#twitter"
                  className="text-current hover:text-[var(--bright-blue)] hover:cursor-pointer text-gray-500 no-underline"
                >
                  @_odds_hub
                </a>
              </span>
              <span className="flex items-center">
                <img
                  src="\images\youtube.avif"
                  alt=""
                  className="h-[1rem] mr-[7px] rounded-[5px]"
                />
                <a
                  href="#youtube"
                  className="text-current hover:text-[var(--bright-blue)] hover:cursor-pointer text-gray-500 no-underline"
                >
                  @_odds_hub
                </a>
              </span>
            </div>
          </div>
        </div>
        <p className="text-orange-400 font-semibold text-[1.4rem] mt-4 font-dancing text-center">
          For communication concerning{" "}
          <span className="text-green-500">Adverts</span> and{" "}
          <span className="text-green-500">Reporting Abuse </span>communicate to
          us via <a href="oddshub@gmail.com">oddshub@gmail.com</a>
        </p>
        <hr className="text-white" />
        <div className="p-[1rem]">
          <p className="flex gap-2">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-soccer-logo_23-2149362229.jpg?t=st=1734202288~exp=1734205888~hmac=82dfde33464c448865ddfdb6d9c0db211e52afc385739bf978b34006fe8ba933&w=740"
              alt="logo"
              className="h-[3.2rem] rounded-[5px]"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            <span className="text-white text-[22px] font-sans no-underline text-white font-bold ml-[15px] text-white-500 mt-2">
              Odds Hub.
            </span>
            <span className="text-white mt-2 text-[15px] font-dancing">
              Copyright &copy; 2024 Odds Hub. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
