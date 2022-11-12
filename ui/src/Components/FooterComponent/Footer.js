import { Link } from 'react-router-dom';
import './Footer.css';

var Footer = () => {
    return(
        <div className='footer'>
            <div className='row'>
                <div className='col-sm-4 col-12'>
                    <h3>Join us</h3>
                    <ul className='social-links'>
                        <Link to='www.facebook.com'><li> facebook</li></Link>
                        <Link to='www.instagram.com'><li> instagram</li></Link>
                        <Link to='www.linkedin.com'><li> linkedin</li></Link>
                        <Link to='www.twitter.com'><li> twitter</li></Link>
                    </ul>
                </div>
                <div className='col-sm-4 col-12'>
                    <h3 >Quick Links</h3>
                    <ul className='quick-links'>
                        <Link to='/'><li> Home</li></Link>
                        <Link to='/about'><li> About</li></Link>
                        <Link to='/contact'><li> Conatct</li></Link>
                        <Link to='/TandC'><li> Terms & Conditions</li></Link>
                    </ul>
                </div>
                <div className=' col-sm-4 col-12'>
                    <h3>Help</h3>
                    <ul className='help'>
                        <Link to="/support"><li > Support</li></Link>
                        <li ><b>Customer Care : </b> 9876543210</li>
                    </ul>
                </div>

            </div>
            <div className='row author'>
                <p className='author-info'>All right reserved &copy; 2022-23 | Design And Develop by <b style={{color:'yellow'}}>Dinesh & Aamin</b></p>
            </div>
        </div>
    );
}

export default Footer;