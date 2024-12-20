import "./profile.css"
function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-card">
            <div className="profile-image">
                <img src="https://via.placeholder.com/120" alt="Profile Picture"/>
            </div>
            <div className="profile-info">
                <h2>John Doe</h2>
                <p>Email: john.doe@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <a href="#" className="edit-button">Edit Profile</a>
        </div>
    </div>
  );
}

export default Profile;
