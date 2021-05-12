import * as React from "react";
import DescriptionElement from "./DescriptionElement";

const descriptionSectionStyle = {
  flexBasis: "50%",
  margin: "auto 0",
  padding: 0
}

export const DescriptionSection = (props) => {
  const { data } = props;

  return (
    <div style={descriptionSectionStyle}>
      {data &&
        data.map((descriptionElement, index) => {
          return <DescriptionElement {...descriptionElement} key={index} />;
        })}
    </div>
  );
};

export default DescriptionSection;
