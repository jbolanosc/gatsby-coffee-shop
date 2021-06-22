import React, { useState, useEffect } from "react"
import Title from "../Globals/Title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default function Menu(props) {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [coffeeItems, setCoffeeItems] = useState([])

  const setData = () => {
    setItems(props.items.edges)
    setCoffeeItems(props.items.edges)
    setCategories(getCategories(props.items.edges))
  }

  useEffect(() => {
    setData()
  }, [])

  const handleCategorieChange = category => {
    let tempItems = [...coffeeItems]

    console.log("temp items", tempItems)
    if (category === "all") {
      setItems(tempItems)
    } else {
      let filteredItems = tempItems.filter(
        ({ node }) => node.category === category
      )
      setItems(filteredItems)
    }
  }

  if (items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Our Delicious Menu" />
          <div className="row mb-5">
            <div className="col text-center">
              <h3>Available Items</h3>
              {/*Categories*/}
              <div className="row mb-5">
                <div className="col-10 mx-auto text-center">
                  {categories.map((category, index) => {
                    return (
                      <button
                        type="button"
                        key={index}
                        className="btn btn-Capuccino text-capitalize m-3"
                        onClick={() => handleCategorieChange(category)}
                      >
                        {category.toString()}
                      </button>
                    )
                  })}
                </div>
              </div>
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
                          <h6 className="mb-0">
                            <small>{node.title}</small>
                          </h6>
                          <h6 className="mb-0 text-expresso">
                            <small>${node.price}</small>
                          </h6>
                        </div>
                        <p className="text-justify">
                          <small>{node.description.description}</small>
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
