import { Link } from "gatsby"
import React from "react"

const Header = ({ dark, siteTitle }) => {
  const isDark = dark ? "dark" : "light";
  
  return (
    <header className={isDark} id="start">
      <div className="container">
        <div className="row"> 
          <div className="logo">
            <Link to="/" className={"button " + isDark}>lfesp</Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/#about" className={"button thin " + isDark}>About</Link>
              <Link to="/#projects" className={"button thin " + isDark}>Projects</Link>
              <Link to="/#contact" className={"button thin " + isDark}>Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
