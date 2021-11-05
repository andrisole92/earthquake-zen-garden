import React from 'react';
import useData from '../hooks/useData';

function Profile() {
  const { profile } = useData();
  console.log(profile);
  return (
    <div className='profile'>
      <h2 className='profile-title'>Profile</h2>
      <section className='profile-detail'>
        <div className='profile-detail-avatar'>
          <img src={profile.avatarImage} alt='Profile image' />
        </div>
        <div className='profile-detail-personalInfo'>
          <div className='flex-row'>
            <span>First Name</span>
            <span>{profile.firstName}</span>
          </div>
          <div className='flex-row'>
            <span>Last Name</span>
            <span>{profile.lastName}</span>
          </div>
          <div className='flex-row'>
            <span>Phone</span>
            <span>{profile.phone}</span>
          </div>
          <div className='flex-row'>
            <span>Email</span>
            <span>{profile.email}</span>
          </div>
          <div className='flex-row'>
            <span>Bio</span>
            <span>{profile.bio}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default React.memo(Profile);
