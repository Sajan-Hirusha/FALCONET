import React from 'react'
import ServiceCardComponent from './ServiceCardComponent'
import falconetLogo from '../../assets/falconetLogo.png';

function ServicesPanel() {
    const serviceCardSet = [
        {
            imgUrl:"src/assets/web.jpg",
            mainTitle:"Web Development",
            subTitle:"Mobile App,UI design",
            router:"/asdasd",
        },
        {
            imgUrl:"src/assets/UI-UX.jpg",
            mainTitle:"UI/UX Design",
            subTitle:"Mobile App,UI design",
            router:"/",
        },
        {
            imgUrl:"src/assets/mern.jpeg",
            mainTitle:"MERN Development",
            subTitle:"Mobile App,UI design",
            router:"/",
        },
        {
            imgUrl:"src/assets/spring.jpeg",
            mainTitle:"Spring",
            subTitle:"Mobile App,UI design",
            router:"/",
        },
        {
            imgUrl:"src/assets/UI-UX.jpg",
            mainTitle:"Web Design",
            subTitle:"Mobile App,UI design",
            router:"/",
        },
        {
            imgUrl:"src/assets/UI-UX.jpg",
            mainTitle:"Web Design",
            subTitle:"Mobile App,UI design",
            router:"/",
        },
    ]
    console.log(serviceCardSet[0].imgUrl);
  return (
    <div style={{
        width:'100%',
        minHeight:'300px',
        maxHeight:'600px',
        padding:'20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center'
    }}>
        {serviceCardSet?.map(({ imgUrl, mainTitle, subTitle, router }, index)=>(
            <ServiceCardComponent 
            imgUrl={imgUrl}
            mainTitle={mainTitle} 
            subTitle={subTitle}
            childPageRoute={router}
        />
        ))}
    </div>
  )
}

export default ServicesPanel