

export const ImageAndColors = () => {
    return (
        <div className="images-and-colors">
                <div className="iac-imgs">
                    <img src="../../Pictures/web/shoeyellred.jpg"  alt=''className="iac-imgs-img item-active"/>
                    <img src="../../Pictures/web/air jordan.jpg" alt='' className="iac-imgs-img"/>
                    <img src="../../Pictures/web/shoes.jpg" alt='' className="iac-imgs-img"/>
                    <img src="../../Pictures/web/shoeeee.jpg" alt='' className="iac-imgs-img"/>
                </div>
                <div className="iac-colors">
                    <div className="iac-head">colors</div>

                    <div className="flex-div">
                        <div className="iac-imgs-color1 item-active"></div>
                        <div className="iac-imgs-color2"></div>
                        <div className="iac-imgs-color3"></div>
                        <div className="iac-imgs-color4"></div>
                    </div>
                </div>
                <div className="iac-sizes">
                    <div className="iac-head">Sizes</div>
                    <div className="flex-div">
                        <div className="iac-sizes-size">41</div>
                        <div className="iac-sizes-size item-active">43</div>
                        <div className="iac-sizes-size">34</div>
                        <div className="iac-sizes-size">24</div>
                    </div>
                    
                </div>
            </div>
    )
}