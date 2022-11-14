import './AddCatagory.css';


var AddCatagory = () => {
    return (
        <div>
            <div className='container-fluid add-catagory'>
                <div className='row'>
                    <div className='catagory-heading'>
                        <h2>Add Catagory</h2>
                    </div>

                    <form className='add-catagory-form'>
                        <div className='fields'>
                            <span>Catagory  Name: </span>
                            <span> <input type='text' name='catagoryname' placeholder='' required /> </span>
                        </div>
                       
                        <button type='submit' className='btn btn-outline-primary' >Add</button>
                    </form>
                </div>



                <div className='catagory-table' >
                    <hr />
                    <div className='catagory-heading'>
                        <h2>Catagory list</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddCatagory;