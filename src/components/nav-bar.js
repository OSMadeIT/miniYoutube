import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="">
            MiniTube
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
