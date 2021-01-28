import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="light" id="start">
    <div className="container">
      <div className="row"> 
        <div className="logo">
          <Link to="/" className="button light">lfesp</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="#about" className="button thin light">About</Link>
            <Link to="#projects" className="button thin light">Projects</Link>
            <Link to="#contact" className="button thin light">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header;
