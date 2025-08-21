import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCardComponent({imgUrl,mainTitle,subTitle,idnum}) {
  return (
        <div style={{
        backgroundImage:`url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        cursor:'pointer',
        borderRadius:'15px',
        
        height:'250px',
        margin:'15px',
        transition: 'transform 0.3s ease',
        }} className='service-card col-md-5 col-lg-3 col-sm-10' data-bs-toggle="modal" data-bs-target={`#staticBackdrop${idnum}`}>
            <div style={{
                height:'60%',
            }} className='col-12'>
            </div>
            <div className='d-flex justify-content-center'>
                <div style={{
                    height:'30%',
                    backgroundColor:'rgb(225,240,248)',
                    borderRadius:'15px',
                    padding:'5px',
                    margin:'10px',
                    width:'90%',
                }} className='col-12 d-flex justify-content-center'>
                    <div className='col-10'>
                        <h5>{mainTitle}</h5>
                        <h6>{subTitle}</h6>
                    </div>
                    <div className='col-2 d-flex align-items-baseline'>
                        <img src={imgUrl} style={{ height: '50px', width: '50px', borderRadius: '50px' }}/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .service-card:hover{
                    transform: scale(1.05);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                Link{
                    text-decoration:none;
                }
            `}</style>
        </div>
    
  )
}

export default ServiceCardComponent