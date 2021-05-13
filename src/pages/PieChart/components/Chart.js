import * as React from "react";
import {PieChart} from "react-minimal-pie-chart";

import { __centerLabel, __chartContainer } from "../PieChartStyle";
import styled from "styled-components";

const ChartContainer = styled.div`
margin: auto 0;
width: 20%;
@media only screen and (max-width: 768px) {
  width: 35%;
}
`
// const chartContainerStyles = {
//   margin: "auto 0",
//   width: "20%",
//   "@media only screen and (max-width: 767px)": {
//     width: "35%"
//   }
// }

const centerLabelStyles = {
  textAnchor: "middle",
  dominantBaseline: "middle"
}

const Chart = (props) => {
  const { data, lineWidth = 10, labelCenter } = props;

  let { totalValue = 0 } = props,
    chartProps = {};

 
  chartProps = {
    data,
    lineWidth,
    totalValue
  };

  chartProps.label = !labelCenter
    ? false
    : () => {
        return (
          <p style={centerLabelStyles} x="50" y="50">
            {labelCenter}
          </p>
        );
      };

  return (
    <ChartContainer>
      <PieChart {...chartProps} />
    </ChartContainer>
  );
};

export default Chart
