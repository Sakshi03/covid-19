export const __chartSectionContainer = () => ({
  display: "flex",
  flexFlow: "row wrap",
  margin: "15px 0px",
  justifyContent: "space-around"
});

export const __chartContainer = () => ({
  flexBasis: "25%",
  margin: "auto 0"
});

export const __centerLabel = () => ({
  textAnchor: "middle",
  dominantBaseline: "middle"
});

export const __descriptionSectionContainer = () => ({
  flexBasis: "50%",
  margin: "auto 0",
  padding: 0
});

export const __descriptionElementContainer = () => ({
  padding: "2px",
  display: "flex",
  justifyContent: "space-around"
});

export const __descriptionElementColor = (props: any) => ({
  background: props.color,
  flex: "0 0 15%",
  margin: "auto 6px",
  borderRadius: "10px",
  minWidth: "21px",
  minHeight: "6px"
});

export const __descriptionDetailsContainer = () => ({
  flex: "0 0 70%"
});

export const __descriptionElementValue = () => ({
  display: "inline-block",
  minWidth: "35px"
});

export const __descriptionElementTitle = () => ({
  textTransform: "uppercase",
  opacity: "0.5"
});
