<script>

    import { fly } from "svelte/transition";

</script>





<div class="product-upload-form" transition:fly="{{delay:10, y:0, duration:200, x:100}}">
    
    <section class="image-side">
        <div class="s-product-name"><h3>Product Form</h3></div>
        <div class="product-form-holder">
            <div class="form-input-div">
                <div class="product-input-label">Name</div>
                <input class="product-input-div" placeholder="Air Jordans"/>
            </div>

            <div class="form-input-div">
                <div class="product-input-label">Category</div>
                <input class="product-input-div" placeholder="Electronics, Clothing, Gadgets, Machines "/>
            </div>

            <div class="form-input-div">
                <div class="product-input-label">Price</div>
                <input type="tel" class="product-input-div" placeholder="10,000.00"/>
            </div>

            <div class="form-input-div">
                <div class="product-input-label">Quantity</div>
                <input type="tel" class="product-input-div" placeholder="10"/>
            </div>

            <div class="form-input-div">
                <div class="product-input-label">Size(s)</div>
                <input type="text" class="product-input-div" placeholder="35,40,45,"/>
            </div>

            <div class="form-input-div">
                <div class="product-input-label">Condition</div>
                <select class="product-input-div select-input">
                    <option value='' class="select-input-option">---</option>
                    <option value='New' class="select-input-option">New</option>
                    <option value='Used' class="select-input-option">Used</option>
                    <option value='Used' class="select-input-option">Re-fub</option>
                </select>
            </div>
        </div>
    </section>
    <section class="more-details">
        <div class="s-product-name"><h3>More Info</h3></div>
        <div class="product-form-holder">
            <div class="form-input-div">
                <div class="product-input-label">Images</div>
                <input type='file' class="product-input-div"  multiple/>
            </div>
            <div class="form-input-div">
                <div class="product-input-label">Brand</div>
                <input class="product-input-div" placeholder="Nike's"/>
            </div>

            <div class="form-input-div">
                <div class="product-input-label">Location</div>
                <input class="product-input-div" placeholder="Lagos, Nigeria"/>
            </div>
            <div class="form-input-div">
                <div class="product-input-label">Colors</div>
                <input class="product-input-div" placeholder="Red, green, yellow, Orange"/>
            </div>

            <div class="form-input-div">
                <div class="product-input-label" >Country</div>
                <select class="product-input-div select-input">
                    <option value='New' class="select-input-option">---</option>
                    <option value='New' class="select-input-option">Nigeria</option>
                    <option value='Used' class="select-input-option">USA</option>
                    <option value='Used' class="select-input-option">China</option>
                </select>
            </div>

            <div class="form-input-div" style="flex-direction:column; items-align:start">
                <div class="product-input-label">Product insight.</div>
                <textarea  type="text" class="product-input-div-big" placeholder="sell your product"></textarea>
            </div>

           <button class="basic-btn ">Upload Products</button>
        </div>
    </section>
  
</div>