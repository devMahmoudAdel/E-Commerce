import "./profile.css"
function EditProfile() {
  return (
    <div className="edit-profile-container">
        <div className="edit-profile-card">
            <h2>Edit Profile</h2>
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                </div>
                <div className="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter a new password" required/>
                </div>
                <div className="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required/>
                </div>
                <button type="submit" className="save-button">Save Changes</button>
            </form>
        </div>
    </div>
  );
}

export default EditProfile;
