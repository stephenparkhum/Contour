import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <section className="profile-section">
            <div className="profile-circle"></div>
            <div className="profile-info">
                <h2>Band Name</h2>
                <ul>
                    <li><strong>Genre:</strong> Metal</li>
                    <li><strong>Location:</strong> Portland, OR</li>
                    <li><strong>Facebook:</strong> http://facebook.com</li>
                    <li><strong>Bandcamp:</strong> http://band.bandcamp.com</li>
                </ul>
            </div>
        </section>
    )
}

export default Profile;