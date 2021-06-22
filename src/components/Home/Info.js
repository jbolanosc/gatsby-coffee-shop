import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-sm-8 mx-auto text-center">
            <Title title="Our Story" />
            <p className="lead text-muted mb-5">
              Loremcd dsdk ajf cale deoe dadj asdl mcasd eeje
            </p>
            <Link to="/about/">
              <button className="btn btn-Capuccino text-uppercase">
                More About us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
