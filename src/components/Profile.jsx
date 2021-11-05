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
          <table>
            <col span='1' class='wide' />
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{profile.firstName}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{profile.lastName}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{profile.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{profile.email}</td>
              </tr>
              <tr>
                <td>Bio</td>
                <td>{profile.bio}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default React.memo(Profile);
