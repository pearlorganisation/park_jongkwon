import React from "react"
import image1 from "./images/nuts.jpg"

function Nuts(){
    return(
        <>
         <div className="container-fluid">
            <div className="row">
            <div className="col-md-12 mt-lg-3 products-column">
                        <div className="row">
                            <div className="col-md-3 mx-auto p-lg-4 p-2">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Fresh Nuts</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4 p-2">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Dried Nuts </h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4 p-2">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Canned Nuts</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                
          
                        </div>

                        

                      </div>
            </div>
            <hr />
        </div>
        </>
    )
}

export default Nuts