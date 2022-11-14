import './WelcomePage.css';
import { Route, Routes } from 'react-router-dom';
import AddCatagory from '../AddCatagory/AddCatagory';
import AddProduct from '../AddProduct/AddProduct';
import Billing from '../Billing/Billing';


var WelcomePage = () => {
    return(
        <div className='container-fluid'>
            <Routes>
                 <Route path='/welcomePage' element={ <WelcomePage/> }></Route> 
                 <Route path='/addCatagory' element={ <AddCatagory /> }></Route> 
                 <Route path='/billing' element={ <Billing /> }></Route> 
                 <Route path='/addProduct' element={ <AddProduct /> }></Route>  
            </Routes>
        </div>
    );
}

export default WelcomePage;