import React from "react"
import { Link } from "gatsby"
import logo from "../../images/coffee-beans.png"
import { FaCartArrowDown } from "react-icons/fa"
import { useState } from "react"

export default function Navbar() {
  const [options, setOptions] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Home",
      },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  })

  const navbarHandler = () => {
    options.navbarOpen
      ? setOptions(options => ({
          ...options,
          navbarOpen: false,
          css: "collapse navbar-collapse",
        }))
      : setOptions(options => ({
          ...options,
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        }))

    console.log(options)
  }

  return (
    <nav className="px-2 navbar navbar-expand-md bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" height="50" width="50" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={options.css}>
        <ul className="navbar-nav mx-auto">
          {options.links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}

          <li className="nav-item mx-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
