import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("/user/getMe", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUserData(response.data.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-data">
            <div className="profile-data-item">
                <span>Username:</span> {userData.username}
            </div>
            <div className="profile-data-item">
                <span>First Name:</span> {userData.firstName}
            </div>
            <div className="profile-data-item">
                <span>Last Name:</span> {userData.lastName}
            </div>
            <div className="profile-data-item">
                <span>Email:</span> {userData.email}
            </div>
            <div className="profile-data-item">
                <span>Phone Number:</span> {userData.phoneNumber}
            </div>
            <div className="profile-data-item">
                <span>Wallet Balance:</span> {userData.walletbalance}
            </div>
        </div>
    );
};

export default Profile;
