import ProfilePage from '../Profilepage/ProfilePage';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
import './ProfileHome.css';


var ProfileHome = () => {
    return(
        <div className='container-fluid'>
           
            <ProfileSidebar />
            <ProfilePage />
        </div>
    );
}

export default ProfileHome;