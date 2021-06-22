import React from "react"
import Title from "../Globals/Title"

export default function Contact() {
  return (
    <section className="container py-5">
      <Title title="Contact us" />
      <div className="row">
        <div className="col-10 col-md-6 col-sm-4 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="John doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Johndoe@any.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                rows="5"
                name="description"
                id="description"
                placeholder="describe your inquire"
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success w-100 text-capitalize mt-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
