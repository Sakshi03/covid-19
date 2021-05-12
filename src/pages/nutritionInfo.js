import * as React from "react"
import Chart from "./PieChart/components/Chart"
import DescriptionSection from "./PieChart/components/DescriptionSection"

const donutChartWrapperStyle = {
  display: "flex",
  flexFlow: "row wrap",
  margin: "15px 0px",
  justifyContent: "space-around"
}

// data
const config = [
  {
    productName: "Nutritional Info.",
    description: "",
    data: [
      { title: 'Vitamin C', value: 1000, color: '#E38627', unit: "mg" },
      { title: 'Zinc', value: 50, color: '#C13C37', unit: "mg" },
      { title: 'D3', value: 1000, color: '#4fc6ff', unit: "mg" },
      { title: 'Tulsi', value: 100, color: '#ffa522', unit: "mg" },
      { title: 'Giloe', value: 100, color: '#f46da0', unit: "mg" },
      { title: 'Kali Mirch', value: 50, color: '#916cae', unit: "mg" },
      { title: 'Dalchini', value: 100, color: '#E18634', unit: "mg" },
      { title: 'Adarak', value: 100, color: '#1C86C3', unit: "mg" }
    ]
  },
]

const NutritionInfo = () => {
  return (
    <main>
      <h3>{config[0].productName}</h3>
      <div style={donutChartWrapperStyle}>
        <Chart {...config[0]} />
        <DescriptionSection {...config[0]} />
      </div>
    </main>
  )
}

export default NutritionInfo;
