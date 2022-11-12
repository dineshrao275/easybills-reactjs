import './FrontPage.css';
import FrontPageHeader from '../../Components/HeaderComponent/FrontPageHeader';
import { Route, Routes } from 'react-router-dom';
import AboutComponent from '../AboutComponent/AboutComponent';
import Contact from '../ContactComponent/Contact';
import Login from '../LoginComponent/Login';
import Register from '../RegisterComponent/Register';
import Footer from '../../Components/FooterComponent/Footer';
import HomePage from '../HomeComponent/HomePage';
var FrontPage = () => {
    return (
        <div className='front-page'>
            <FrontPageHeader />
            <Routes>
                 <Route path='/home' element={ <HomePage />}></Route> 
                <Route path='/about' element={ <AboutComponent />}></Route>
                <Route path='/contact' element={ <Contact /> }></Route>
                <Route path='/TandC' element={ <AboutComponent />}></Route>
                <Route path='/login' element={ <Login /> }></Route>
                <Route path='/register' element={ <Register />}></Route>
            </Routes>
            <Footer />
        </div>

    );
}

export default FrontPage;