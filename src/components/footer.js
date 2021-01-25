import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="light" id="foot">
    <div className="container">
      <div className="row">
        <div className="icon">
          <Link to="#head">lfe.</Link>
        </div>
      </div>
      <div className="row"> 
        <div className="copyright thin">© {new Date().getFullYear()} liam esparraguera</div>
        <div className="navigation">
          <nav>
            <a href="mailto: liame@princeton.edu" className="thin">email</a>
            <a href="https://www.linkedin.com/in/liamesparraguera/" target="_blank" className="thin">linkedin</a>
            <a href="https://github.com/lfesp/" target="_blank" className="thin">github</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;