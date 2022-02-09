import React from "react"
import image1 from "./images/product1.webp"
import image2 from "./images/product2.webp"
import image3 from "./images/product3.webp"
import image4 from "./images/product4.webp"
import image5 from "./images/product5.webp"
import image6 from "./images/product6.webp"
import image7 from "./images/product7.webp"
import image8 from "./images/product8.webp"

function Homeproducts(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="col-md-12 mt-lg-3">
                        <div className="row">
                            <div className="col-md-3 mx-auto p-lg-4">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Vegetables</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4">
                                <div class="card">
                                    <img src={image2} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Fruits</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4">
                                <div class="card">
                                    <img src={image3} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Nuts</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4">
                                <div class="card">
                                    <img src={image4} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Meats</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
          
                        </div>

                        <div className="row">
                        <div className="col-md-3 mx-auto my-lg-3 p-lg-4">
                                <div class="card">
                                    <img src={image5} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Fishes</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto my-lg-3 p-lg-4">
                                <div class="card">
                                    <img src={image6} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Cooking Essentials</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto my-lg-3 p-lg-4">
                                <div class="card">
                                    <img src={image7} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Dairy,chilled & Eggs</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto my-lg-3 p-lg-4">
                                <div class="card">
                                    <img src={image8} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Frozen Snacks</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-2 mx-auto my-lg-3">
                                <div class="card">
                                    <img src={image9} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title">Vegetables</h5>
                                        <h5 class="card-title">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 mx-auto my-lg-3">
                                <div class="card">
                                    <img src={image10} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title">Vegetables</h5>
                                        <h5 class="card-title">Only for members</h5>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                      
        

                      </div>
            </div>
        </div>
        </>
    )
}

export default Homeproducts