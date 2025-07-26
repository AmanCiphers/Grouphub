import logo from "../assets/Logo.svg";
import heroimage from "../assets/group-1-photo.png";
import "./landing.css";

const LandingPage = () => {
  return (
    <>
      <div className="mainPage">
        <Box1></Box1>
        <Box2></Box2>
      </div>
    </>
  );
};


const Box1 = () =>{
  return(
    <>
      <div className="box1">
        <div className="navbar">
          <div className="img">
          <img src={logo} alt="logo" />
        </div>
          <div>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#projects">Find Projects</a></li>
            </ul>
          </div>
        </div>

        <div className="textcontainer">
          <div className="herotext">
          <h1>Build Together, Smarter</h1>
          <h2>Find Projects   | Join Teams</h2>
          <h2>Create projects | Make teams</h2>
          <h3>An AI-powered platform to join or create group projects, collaborate, and grow no experience needed.</h3>
          </div>
        </div>
      </div>
    </>
  );
}

const Box2 = () =>{
  return(
    <>
      <div className="box box2">
        <ul>
            <li><a href="#account">Account</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
        </ul>

        <div className="img">
            <img src={heroimage} alt="heroimage" />
        </div>

        <div className="bigimage">
          <img src={logo} alt="big logo" />
        </div>
      </div>
    </>
  );
}







export default LandingPage;
