import logo from "../assets/Logo.svg";
import "./landing.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

const Navbar = () => {
  return (
    <div className="container">
      <div className="innerdiv">
    
        <div className="logo">
          <img src={logo} alt="GroupHUB logo" id="logo" />
        </div>

        <div className="support"></div>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#projects">Find Projects</a></li>
            <li><a href="#account">Account</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default LandingPage;
