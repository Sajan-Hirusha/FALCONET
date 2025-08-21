import React from 'react'
import ServiceCardComponent from './ServiceCardComponent'
import falconetLogo from '../../../assets/falconetLogo.png';
import ServicePopUpScreen from './ServicePopUpScreen';

function ServicesPanel() {
    const serviceCardSet = [
        {
            imgUrl:"src/assets/web.jpg",
            mainTitle:"Web Development",
            subTitle:"Desktop site, reponsive",
            description:"At FALCONET, we specialize in creating dynamic and user-friendly websites tailored to your unique needs. Our experienced team combines cutting-edge technology with innovative design to deliver responsive and engaging online experiences. Whether you need a sleek landing page, a robust e- commerce platform, or a comprehensive content management system, we are here to help bring your vision to life. Partner with us to enhance your online presence and connect with your audience effectively.",
        },
        {
            imgUrl:"src/assets/UI-UX.jpg",
            mainTitle:"UI/UX Design",
            subTitle:"Mobile App,UI design",
            description:"At FALCONET, we specialize in creating dynamic and user-friendly websites tailored to your unique needs. Our experienced team combines cutting-edge technology with innovative design to deliver responsive and engaging online experiences. Whether you need a sleek landing page, a robust e- commerce platform, or a comprehensive content management system, we are here to help bring your vision to life. Partner with us to enhance your online presence and connect with your audience effectively.",
        },
        {
            imgUrl:"src/assets/mern.jpeg",
            mainTitle:"MERN Development",
            subTitle:"Mobile App,UI design",
            description:"At FALCONET, we specialize in creating dynamic and user-friendly websites tailored to your unique needs. Our experienced team combines cutting-edge technology with innovative design to deliver responsive and engaging online experiences. Whether you need a sleek landing page, a robust e- commerce platform, or a comprehensive content management system, we are here to help bring your vision to life. Partner with us to enhance your online presence and connect with your audience effectively.",
        },
        {
            imgUrl:"src/assets/spring.jpeg",
            mainTitle:"Spring",
            subTitle:"Mobile App,UI design",
            description:"At FALCONET, we specialize in creating dynamic and user-friendly websites tailored to your unique needs. Our experienced team combines cutting-edge technology with innovative design to deliver responsive and engaging online experiences. Whether you need a sleek landing page, a robust e- commerce platform, or a comprehensive content management system, we are here to help bring your vision to life. Partner with us to enhance your online presence and connect with your audience effectively.",
        },
        {
            imgUrl:"src/assets/UI-UX.jpg",
            mainTitle:"Web Design",
            subTitle:"Mobile App,UI design",
            description:"At FALCONET, we specialize in creating dynamic and user-friendly websites tailored to your unique needs. Our experienced team combines cutting-edge technology with innovative design to deliver responsive and engaging online experiences. Whether you need a sleek landing page, a robust e- commerce platform, or a comprehensive content management system, we are here to help bring your vision to life. Partner with us to enhance your online presence and connect with your audience effectively.",
        },
        {
            imgUrl:"src/assets/UI-UX.jpg",
            mainTitle:"Web Design",
            subTitle:"Mobile App,UI design",
            description:"At FALCONET, we specialize in creating dynamic and user-friendly websites tailored to your unique needs. Our experienced team combines cutting-edge technology with innovative design to deliver responsive and engaging online experiences. Whether you need a sleek landing page, a robust e- commerce platform, or a comprehensive content management system, we are here to help bring your vision to life. Partner with us to enhance your online presence and connect with your audience effectively.",
        },
    ]
  return (
    <div style={{
        width:'100%',
        minHeight:'300px',
        maxHeight:'700px',
        overflow:'scroll',
        padding:'20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
    }}>
        {serviceCardSet?.map(({imgUrl, mainTitle, subTitle, description}, index)=>(
            <>
                <ServiceCardComponent
                    key={index} 
                    imgUrl={imgUrl}
                    mainTitle={mainTitle} 
                    subTitle={subTitle}
                    idnum={index}
                />
                <ServicePopUpScreen key={imgUrl} idnum={index} title={mainTitle} subtitle={subTitle} imgUrl={imgUrl} description={description} />
            </>
        ))}
    </div>
  )
}

export default ServicesPanel