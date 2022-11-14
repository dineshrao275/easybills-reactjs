import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
import './ProfileHome.css';
import WelcomePage from '../WelcomePage/WelcomePage';


var ProfileHome = () => {
    return(
        <div className='container-fluid'>
           
            <ProfileSidebar />
             <WelcomePage/> 
            
        </div>
    );
}

export default ProfileHome;