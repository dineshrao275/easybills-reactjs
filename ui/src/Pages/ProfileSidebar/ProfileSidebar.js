import './ProfileSidebar.css';
import { Link } from 'react-router-dom';
var ProfileSidebar = () => {
    return (
        <div>
             <div className='profile-page-header'><h1>Firm Name</h1></div>
            <div class="sidebar">
                <Link  to='/welcomePage'>Home</Link>
                <Link  to='/billing'>Billing</Link>
                <Link to='/addCatagory'>Add Catagory</Link>
                <Link to='/addProduct'>Add Product</Link>
            </div>
        </div>
    )
}

export default ProfileSidebar;