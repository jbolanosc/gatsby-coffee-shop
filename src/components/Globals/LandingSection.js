import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function LandingSection({
  img,
  styleClass,
  title,
  description,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-uppercase text-white display-2 text-center font-weight-bold">
        {title}
      </h1>
      <p className="display-5 text-center text-white text-uppercase font-weight-bold">
        {description}
      </p>
      {children}
    </BackgroundImage>
  )
}

LandingSection.props = {
  title: "default title",
  styleClass: "default-background",
}
