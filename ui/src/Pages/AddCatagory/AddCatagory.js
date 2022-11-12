import './AddCatagory.css';


var AddCatagory = () => {
    return(
        <div>
            <div className='container'>
                <h1>AddCatagory</h1>

                <form >
                    <div className='container' >
                    <label>Catagory Name</label>
                    <input type='text' name='catagoryname' placeholder='catagory'/> 
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

export default AddCatagory;