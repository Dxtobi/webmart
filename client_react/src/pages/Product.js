import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageAndColors } from '../components/ImagesAndColor';

function Product() {
   
const data1 = useLocation()


return (
    <div className="single-post">
        <div className="single-product">
        <section className="image-side">
            <div className="s-product-name"><button className="go-back-btn">Back</button></div>
            <div className="image-side-inner">
                <img src="../../Pictures/web/airmax.jpg"  alt=''className="si-img"/>
            </div>
            <ImageAndColors />
        </section>
        <section className="more-details">
            <div className="s-product-name"><div>Product Name</div> <div style="color: #738b6a;">$2000</div></div>
            
        </section>
       </div>
        
       <div className="add-to-cart-contact">
        <div className="contact-seller">
            <div className="cont-icon"></div>
            <div>Contact</div>
        </div>
        <div className="add-to-cart">
            <div className="cont-icon-"></div>
            <div>Add To Cart</div>
        </div>
       </div>
    </div>
);
}

export default Product;