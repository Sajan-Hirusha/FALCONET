import React, { useState } from 'react'
import contactUsImg from '../../assets/contactUs.png'
import callImg from '../../assets/Phone.png'
import emailImg from '../../assets/Email.png'
import LocationImg from '../../assets/Location.png'

function ContactUsForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        msg: ""
    });

function handleOnChange(e){
    const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
}

  return (
    <div className='container'>
        <div className='row d-flex'>
        <div className='col-lg-5 col-sm-12'>
            <div style={{
                backgroundColor:'rgb(22,138,204)',
                borderRadius:'0 10px 10px 0',
                margin:'0 10px 0 0',
                height:'400px',
            }}>
                <div className='d-flex justify-content-center'>
                    <img src={contactUsImg} style={{
                        width:'300px',
                    }} alt='contactUs' />
                </div>
                <div className='contact-items'>
                    <p><img src={callImg} style={{
                        width:'25px'
                    }} />&nbsp; +94 705 90 7934</p>
                    <p><img src={emailImg} style={{
                        width:'25px'
                    }} />&nbsp;falconetservices@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='col-lg-7 col-sm-12 ml-1'>
            <h5 className='get-in-touch'>Get in Touch</h5>
            <p>Any question or remarks? Let us know!</p>
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-12">
                    <div className="col-lg-6 col-md-11">
                        <input type="text" className="form-control" id="validationCustom01" name='name' value={formData.name} placeholder='John' onChange={handleOnChange} required/>
                        <div className="valid-feedback">    
                        Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Please enter your name.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="col-lg-6 col-md-11">
                        <input type="text" className="form-control" id="validationCustom01" name='phone' value={formData.phone} placeholder='07X XXX XXXX' onChange={handleOnChange} required />
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Please enter your phone number.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="col-lg-6 col-md-11">
                        <input type="text" className="form-control" id="validationCustom01" name='email' value={formData.email} placeholder='john@gmail.com' onChange={handleOnChange} required />
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Please enter your email.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="col-11">
                        <textarea className="form-control" placeholder='Type your message here' id="exampleFormControlTextarea1" rows="3" name='msg' value={formData.msg} onChange={handleOnChange} required></textarea>
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Please enter your message.
                        </div>
                    </div>
                </div>                
                <div className="col-12">
                    <button type="submit" className="btn btn-primary mb-3 contact-submitBtn">Submit Message</button>
                </div>
            </form>
            <style jsx>{`
                .contact-submitBtn {
                    background-color:#0c8ce9;
                    border:none;
                    float:right;
                    margin-right:20px;
                }
                .contact-items{
                    display: grid;
                    place-items: left;
                    color:white;
                    font-weight:bold;  
                }
                .contact-items p{
                    margin-left:10%;  
                }
                .contact-submitBtn:hover {
                    background-color: rgb(11, 107, 162);
                }
                .get-in-touch{
                    color:#0c8ce9;
                }
            `}</style>
        </div>
    </div>
    </div>
  )
}

export default ContactUsForm