import React from "react"
import image1 from "./images/footer-logo-1.webp"
import image2 from "./images/footer-logo-2.webp"

function Footer(){
    return(
        <>
       
                     
                      <div className="footer-div">

                      <div className="footer-anchor-div">

                          <div className="footer-single-anchor mx-3">

                         <a href="" className="footer-anchor">About Us</a>

                          </div>
                           
                           <div className="footer-single-anchor mx-3">

                           <a href="" className="footer-anchor">Contact Us</a>

                           </div>

                           
                         
                       <div className="footer-single-anchor mx-3">

                           <a href="" className="footer-anchor">Join Us</a>

                       </div>
                        
                     <div className="footer-single-anchor mx-3">

                           <a href="" className="footer-anchor">Terms & Privacy Policy</a>

                     </div>

                        </div>
                             
                          
                        
                         
                            {/* <p>Copyright 2021 OLEOBD , All right reserved</p> */}
                         
                       

                         <div>

                         <h3 className="footer-logo-heading">DOWNLOAD OLEOBD APP</h3>
                         
                         <img src={image1} class="footer-logo-1" alt="..." />
                       
                     
                         <img src={image2} class="footer-logo-1" alt="..." />

                         </div>

                      </div>
                        
                      
                         
                            
                          
                     

                
        </>
    )
}

export default Footer