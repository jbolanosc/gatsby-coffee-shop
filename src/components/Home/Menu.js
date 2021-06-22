import React, { useState, useEffect } from "react"
import Title from "../Globals/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Menu(props) {
  const [items, setItems] = useState([])
  const [coffeeItems, setCoffeeItems] = useState()

  const setData = () => {
    setItems(props.items.edges)
  }

  useEffect(() => {
    setData()
  }, [])

  if (items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Our Delicious Menu" />
          <div className="row mb-5">
            <div className="col text-center">
              <h3>Available Items</h3>
              {/*Categories*/}
              <div className="row">
                {/*Items*/}
                {items.map(({ node }) => {
                  const image = getImage(node.image.gatsbyImageData)
                  return (
                    <div
                      key={node.id}
                      className="bg-light col-11 col-md-6 my-3 d-flex mx-auto"
                    >
                      <div>
                        <GatsbyImage image={image} alt={node.title} />
                      </div>
                      <div className="flex-grow-1 px-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-0">{node.title}</h6>
                          <h6 className="mb-0">${node.price}</h6>
                        </div>
                        <p className="text-justify">
                          <small className="">
                            {node.description.description}
                          </small>
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>No items to display</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
