import * as React from "react";
import styled from "styled-components";

const descriptionElementContainerStyles = {
  padding: "2px",
  display: "flex",
  justifyContent: "space-around"
}

const DescriptionElementColor = styled.div`
  background: ${props => props.color};
  flex: 0 0 15%;
  margin: auto 6px;
  border-radius: 10px;
  min-width: 21px;
  min-height: 6px;
`

const descriptionDetailWrapperStyle = {
  flex: "0 0 70%"
}

const elementValueStyle = {
  display: "inline-block",
  width: "50%"
}

const elementTitleStyle = {
  opacity: "0.5"
}

const DescriptionElement = (props) => {
  const { value, color, title, unit = "" } = props;

  return (
    <li style={descriptionElementContainerStyles}>
      <DescriptionElementColor color={color} />
      <div style={descriptionDetailWrapperStyle}>
        <span style={elementValueStyle}>{`${value}${unit}`}</span>
        <span style={elementTitleStyle}>{title}</span>
      </div>
    </li>
  );
};

export default DescriptionElement;
