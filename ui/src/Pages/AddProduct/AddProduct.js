import './AddProduct.css';


var AddProduct = () => {
    return (
        <div>
            <div className='container-fluid add-product'>
                <div className='row'>
                    <div className='product-heading'>
                        <h2>Add Product</h2>
                    </div>

                    <form className='add-product-form'>
                        <div className='fields ' >
                            <span>Select Catagory : </span>
                            <span> <input type='text' name='Productname' placeholder='' /> </span>
                        </div>
                        <div className='fields ' >
                            <span>Product Name : </span>
                            <span> <input type='text' name='Productname' placeholder='Product' /> </span>
                        </div>
                        <div className='fields ' >
                            <span>Product Price : </span>
                            <span> <input type='text' name='Productname' placeholder='Product' /> </span>
                        </div>
                        <div className='fields ' >
                            <span>Units : </span>
                            <span> <select name='productUnit' >
                                <option >gm/kg</option>
                                <option >ml/lit</option>
                                <option >pcs</option>
                            </select>
                            </span>
                        </div>

                        <button type='submit' className='btn btn-outline-primary' >Add</button>
                    </form>
                </div>



                <div className='product-table' >
                    <hr/>
                    <div className='product-heading'>
                        <h2>Product list</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddProduct;