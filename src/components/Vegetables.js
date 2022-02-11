import React from "react"
import image1 from "./images/vegetables.jpg"

function Vegetables(){
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
                                        <h5 class="card-title home-card-title-1">Leafy and Salad Vegetables</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4 p-2">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Root and Tuberous Vegetables </h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4 p-2">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Bulb and Stem Vegetables</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto p-lg-4 p-2">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Edible Flower Vegetables</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
          
                        </div>

                        <div className="row">
                        <div className="col-md-3 mx-auto my-lg-3 p-lg-4 p-2">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Podded Vegetables</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto my-lg-3 p-lg-4 p-2">
                                <div class="card">
                                    <img src={image1} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Canned Vegetables</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-3 mx-auto my-lg-3 p-lg-4 p-2">
                                <div class="card">
                                    <img src={image7} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Dairy,chilled & Eggs</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mx-auto my-lg-3 p-lg-4 p-2">
                                <div class="card">
                                    <img src={image8} class="card-img-top product-card-image" alt="..." />
                                    <div class="card-body product-card-body">
                                        <h5 class="card-title home-card-title-1">Frozen Snacks</h5>
                                        <h5 class="card-title home-card-title-2">Only for members</h5>
                                    </div>
                                </div>
                            </div> */}
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
            <hr />
        </div>
        </>
    )
}

export default Vegetables