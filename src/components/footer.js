import { Link } from "gatsby"
import React from "react"

const Footer = ({ dark, siteTitle }) => {
  const isDark = dark ? "dark" : "light";

  return (
    <footer className={isDark} id="contact">
      <div className="container">
        <div className="row">
          <div className="icon">
            <Link to="/#start">lfe.</Link>
          </div>
        </div>
        <div className="row"> 
          <div className="copyright thin">© {new Date().getFullYear()} liam esparraguera</div>
          <div className="navigation">
            <nav>
              <a href="mailto: liame@princeton.edu" className="thin" rel="noreferrer">email</a>
              <a href="https://www.linkedin.com/in/liamesparraguera/" target="_blank" className="thin" rel="noreferrer">linkedin</a>
              <a href="https://github.com/lfesp/" target="_blank" className="thin" rel="noreferrer">github</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;