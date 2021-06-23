import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Product({ product }) {
  const image = getImage(product.image.gatsbyImageData)

  return (
    <div className="col-10 col-md-6 col-sm-8 col-xl-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%", maxWidth: "100%" }}>
        <GatsbyImage
          image={image}
          alt={product.title}
          className="card-img-top"
        />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
        </div>
        <button
          className="btn btn-Capuccino mt-3 text-capitalize snipcart-add-item"
          data-item-id={product.id}
          data-item-name={product.title}
          data-item-price={product.price}
          data-item-image={product.image.fluid.src}
          data-item-url="dkkd"
        >
          add to cart
        </button>
      </div>
    </div>
  )
}
