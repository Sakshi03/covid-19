import * as React from "react"
import styled from "styled-components";

const descriptionStyle = {
  opacity: 0.5
}

const readMoreStyle = {
  color: "#003566",
  cursor: "pointer"
}

const MoreDescription = styled.div`
display: ${props => !props.isReadMoreTriggered && "none"}
`

// data
const config = [
  {
    productName: "Benefits",
    data: [
      { title: "Vitamin C", description: "Vitamin C, also known as ascorbic acid, is an essential water-soluble nutrient. Humans and few other animals, such as primates, pigs, depend on vitamin C from the nutritional supply by fruits and vegetables (red peppers, oranges, strawberries, broccoli, mangoes, lemons). The potential role of vitamin C in preventing and ameliorating infection is well established in medical science. Ascorbic acid(vitamin c) is crucial for immune responses. It has important anti-inflammatory,immunomodulating, antioxidant, antithrombotic, and antiviral properties. vitamin C has significant effects on the immune system. Deficiency in the vitamin has associations with a higher risk of infections, such as pneumonia. Vitamin C has an important homeostatic role as an antioxidant. It is known to demonstrate direct virucidal activity and augment interferon production. It has effector mechanisms in both the innate and adaptive immune systems. Vitamin C lessens reactive oxidative species (ROS) and inflammation via attenuation of NF-κB activation. Scientists recommend that people in high-risk groups for COVID-19 mortality and at risk of vitamin C deficiency should be encouraged with vitamin C supplementation daily." },
      { title: "Zinc", description: "Zinc is a mineral found in many different food types. The findings suggest that zinc could have protective effects against COVID-19 by supporting anti-viral immunity and reducing inflammation. A team of researchers at Sechenov University in Moscow, Russia, led the review and published it in the International Journal of Molecular Medicine. Zinc is an essential mineral with a wide range of roles in the human body, including supporting the function of over 300 enzymes.The body needs zinc to carry out normal metabolism and ensure the proper function of the reproductive, cardiovascular, and nervous systems. Foods high in zinc include animal products, such as meat, shellfish, chicken, and fortified breakfast cereal. However, beans, nuts, and seeds also contain zinc. Phytates in vegetables and grains can reduce the absorption of zinc and, therefore, vegetarians and vegans may need 50% more zinc in their diet. Deficiency in zinc has associations with delayed growth in children, as well as increased risk of infection. It is also a significant risk factor for the development of pneumonia, which can be a consequence of COVID-19. Zinc supports the production and maturation of white blood cells, which are the major players in the immune system. There are multiple types of white blood cells, some of which make antibodies, capture and destroy pathogens, and return the immune system to normal after an infection. Zinc also helps to regulate inflammation. While an inflammatory response is necessary to fight infection, the overproduction of pro-inflammatory cytokines early in the infection is responsible for some of the worst symptoms of COVID-19. The National Institutes of Health (NIH) recommend the following daily intake of zinc: ● males aged 14 and older: 11 milligrams (mg) ● females aged 14 and older: 9 mg ● pregnant women: 11 mg ● women who are lactating: 12 mg" },
      { title: "Vitamin D", description: "Vitamin D is a fat-soluble vitamin that plays a number of critical roles in your body. This nutrient is especially important for immune system health, leaving many people wondering whether supplementing with vitamin D may help reduce the risk of contracting the new coronavirus that causes COVID-19. While there’s currently no cure for COVID-19, preventive measures like physical distancing and proper hygiene can protect you from contracting the virus.Also, some research shows that having healthy levels of vitamin D can help keep your immune system healthy and may protect against respiratory illnesses in general. A recent study indicated that patients hospitalized with COVID-19 who had sufficient levels of vitamin D had a decreased risk for adverse outcomes and death.Vitamin D is necessary for the proper functioning of your immune system — which is your body’s first line of defense against infection and disease. The vitamin is so important for immune function that low levels of vitamin D have been associated with increased susceptibility to infection, disease, and immune-related disorders.For example, low vitamin D levels are associated with an increased risk of respiratory diseases, including tuberculosis, asthma, and chronic obstructive pulmonary disease (COPD), as well as viral and bacterial respiratory infections.However, a recent study has determined that a blood level of 25-hydroxyvitamin D of at least 30 ng/mL seemed to help reduce the likelihood of adverse clinical outcomes and death in hospitalized patients with COVID-19. Hospital data of 235 patients with COVID-19 were analyzed.In patients older than age 40, those who had adequate levels of vitamin D were 51.5% less likely to have adverse outcomes, including becoming unconscious, hypoxia, and death, as compared to vitamin D-deficient patients." },
    ]
  },
]

const Benefits = () => {
  const [isReadMore, setReadMore] = React.useState(false);

  const handleReadMoreClick = () => {
    setReadMore(!isReadMore);
  }

  return (
    <main>
      <h3>{config[0].productName}</h3>
      <div>
        {config[0].data && config[0].data.map((item) => {
          return (
            <div>
              <h4>{item.title}</h4>
              <div style={descriptionStyle}>
                <span>
                  {item.description.substring(0, 400)}
                  {!isReadMore && <span> ... </span>}
                </span>
                <MoreDescription isReadMoreTriggered={isReadMore}>
                  {item.description.substring(400, item.description.length)}
                </MoreDescription>
              </div>
              <div style={readMoreStyle} onClick={handleReadMoreClick}>{isReadMore ? "READ LESS" : "READ MORE"}</div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Benefits;
