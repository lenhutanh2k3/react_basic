import React from "react";
import "./nav_style.scss";
import { Link } from "react-router-dom";  // Use Link from react-router-dom

class Nav extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link className="active" to="/home">Home</Link> {/* Use Link for internal navigation */}
          </li>
          <li>
            <Link to="/job">Job</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* This route is not defined yet */}
          </li>
        </ul>
      </>
    );
  }
}

export default Nav;
