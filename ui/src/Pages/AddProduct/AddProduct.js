import './AddProduct.css';


var AddProduct = () => {
    return(
        <div>
            <div className='container'>
                <h1>Add Product</h1>

                <form >
                <div className='container' >
                    <label>Select Catagory</label>
                    <input type='text' name='Productname' placeholder=''/> 
                    </div>
                    <div className='container' >
                    <label>Product Name</label>
                    <input type='text' name='Productname' placeholder='Product'/> 
                    </div>
                    <div className='container' >
                    <label>Product Price</label>
                    <input type='text' name='Productname' placeholder='Product'/> 
                    </div>
                    <div className='container' >
                    <label>Units</label>
                    <select name='productUnit' >
                        <option >gm/kg</option>
                        <option >ml/lit</option>
                        <option >pcs</option>
                    </select>
                    </div>
                    
                    <button type='submit' >Add</button>
                </form>
                <hr />
            </div>

            <div >
                    editable
            </div>

        </div>
    );
}

export default AddProduct;