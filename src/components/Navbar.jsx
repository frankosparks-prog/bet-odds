import React, { useState } from "react";
import { Modal, Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Pred from "./Pred";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About"
import Login from "./Login";
import ScrollToTop from "./scrollTop";

function Navbar(){
  const[setLoginObj] = useState({});
  const[openLogin, setOpenLogin] = useState(false);
  function handleLogin(login){
    if(login){
      setLoginObj(login);
    }
    setOpenLogin((prev) => !prev)
  }
  return(
    <div className="nav ">
      <ScrollToTop />
      <header className="mb-20 flex items-center justify-between bg-white z-[1000] shadow-[5px_4px_9px_rgba(0,0,0,0.2)] bg-gradient-to-r from-blue-500 via-blue-300 to-white fixed top-0 w-full">
        <div className="flex">
          <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-soccer-logo_23-2149362229.jpg?t=st=1734202288~exp=1734205888~hmac=82dfde33464c448865ddfdb6d9c0db211e52afc385739bf978b34006fe8ba933&w=740" alt="logo" className="h-[3.4rem]"/>
          <span className="text-black font-serif  font-bold ml-4 text-lg sm:text-base md:text-sm lg:text-lg leading-relaxed sm:leading-normal">Odds Hub</span>
        </div>
        <Nav className="navigation text-lg sm:text-base md:text-sm lg:text-lg leading-relaxed sm:leading-normal">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/predictions"> 
            Predictions
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="contact">
            Contact Us
          </Nav.Link>
          <button
          type="button"
          className="btnlogin ml-[40px]"
          onClick={() => {handleLogin()}}
          >
            VIP Login
          </button>
        </Nav>
      </header>

      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/predictions" element={<Pred />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </div>

      <Modal
        show={openLogin}
        onHide={() => handleLogin()}
        size={""}
        className="rounded-[10px]"
      >
        <div className="rounded-t-[5px] text-center bg-gradient-to-r from-white via-blue-500 to-blue-600 flex gap-[4.5rem]">
          <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-soccer-logo_23-2149362229.jpg?t=st=1734202288~exp=1734205888~hmac=82dfde33464c448865ddfdb6d9c0db211e52afc385739bf978b34006fe8ba933&w=740" alt="logo" className="h-[3.2rem] rounded-[5px]" />
          <h1 className="text-black text-center">Odds Hub</h1>
        </div>
        <Login setOpenLogin={setOpenLogin} />
      </Modal>
    </div>
  )
}

export default Navbar;