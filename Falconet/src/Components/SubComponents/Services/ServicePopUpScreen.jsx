import React from 'react'

function ServicePopUpScreen({idnum, title, subtitle, imgUrl, description}) {
  return (
    <div className="modal fade" id={`staticBackdrop${idnum}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h2 style={{
                            textAlign:"center",
                            color:'#0c8ce9',
                            fontFamily: 'Rubik',
                            fontWeight: 'bold',
                        }}>{title}</h2>
                        <h3 style={{
                            textAlign:"center",
                            marginBottom:"50px",
                            fontFamily: 'Rubik',
                        }}>{subtitle}</h3>
                        <div className='container '>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12' style={{ 
                                    display:"flex",
                                    justifyContent:"center",
                                }}>
                                    <img src={imgUrl} alt='' style={{
                                        maxWidth:'90%',
                                        borderRadius:'20px',
                                        }}/>
                                </div>
                                <div className='col-lg-6 col-md-12'>
                                    <p style={{
                                        marginLeft:'10px',
                                    }}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default ServicePopUpScreen