import React from "react"
import Title from "../Globals/Title"
import Product from "../Home/Product"
import { StaticQuery, graphql } from "gatsby"

export default function Products() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <section className="">
          <div className="container">
            <Title title="Our delicious products" />
            <div className="row">
              {data.products.edges.map(({ node: product }) => {
                return <Product key={product.id} product={product} />
              })}
            </div>
          </div>
        </section>
      )}
    />
  )
}

const query = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid {
              src
            }
            gatsbyImageData(width: 300, height: 300)
          }
        }
      }
    }
  }
`
