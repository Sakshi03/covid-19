import * as React from "react"
import NutritionInfo from "./nutritionInfo"
import Benefits from "./benefits"
import productImage from "../images/Immunoten.jpg";

// styles
const PageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}

const containerStyle = {
  marginRight: "auto",
  marginLeft: "auto",
  paddingLeft: "16px",
  paddingRight: "16px"
}

const productPageStyle = {
  display: "flex",
  flexDirection: "column"
}

const imageWrapperStyle = {
  position: "relative",
  minHeight: "1px",
  paddingRight: "8px",
  paddingLeft: "8px",
  float: "left",
  width: "100%"
}

const imageStyle = {
  width: "100%"
}

const rightContainerStyle = {
  position: "relative",
  minHeight: "1px",
  paddingRight: "8px",
  paddingLeft: "8px",
  float: "left",
  width: "100%"
}

const descriptionStyle = {
  opacity: 0.5
}

const headerStyle = {
  marginBottom: "0px"
}


// data
const config = [
  {
    productName: "Immunoten",
    imageUrl: productImage,
    description: "Vitamin C,D & Zinc Tablets"
  },
]

const IndexPage = () => {
  return (
    <main style={PageStyles}>
      <title>Home Page</title>
      <div style={containerStyle}>
        <div style={productPageStyle}>
          <div style={imageWrapperStyle}>
            <img src={config[0].imageUrl} alt="" style={imageStyle} />
          </div>
          <div style={rightContainerStyle}>
            <h2 style={headerStyle}>{config[0].productName}</h2>
            <p style={descriptionStyle}>{config[0].description}</p>
            <NutritionInfo />
            <Benefits />
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
