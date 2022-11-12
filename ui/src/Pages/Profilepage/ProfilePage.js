import './ProfilePage.css';
import { Route, Routes } from 'react-router-dom';
import AddCatagory from '../AddCatagory/AddCatagory';
import AddProduct from '../AddProduct/AddProduct';
import Billing from '../Billing/Billing';


var ProfilePage = () => {
    return(
        <div className='container-fluid'>
           
            <Routes>
                 <Route path='/profileHome' element={ <ProfilePage/> }></Route> 
                 <Route path='/addCatagory' element={ <AddCatagory /> }></Route> 
                 <Route path='/billing' element={ <Billing /> }></Route> 
                 <Route path='/addProduct' element={ <AddProduct /> }></Route>  
            </Routes>
        </div>
    );
}

export default ProfilePage;