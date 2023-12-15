import {Link} from "react-router-dom";

function Navbar() {
    const navbarStyle = {
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        
      };

      const linkStyle = {
        textDecoration: "none",
        padding: "5px 10px",
        border: "1px solid #fff",
        borderRadius: "5px",
      };
    
    return(
      <div  style={navbarStyle}>
      <Link to='/' style={linkStyle}>Register</Link>
       <Link to='/login' style={linkStyle}>Login</Link>
       <Link to='/Profile' style={linkStyle}>Profile</Link>
       <Link to='/calculator'style={linkStyle}>Calculator</Link>
   </div>
    )
}

export { Navbar }