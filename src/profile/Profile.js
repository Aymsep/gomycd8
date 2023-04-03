import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={styles.profile}>
      <div style={styles.image}>{children}</div>
      <h1 style={styles.fullName}>{fullName}</h1>
      <p style={styles.bio}>{bio}</p>
      <p style={styles.profession}>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click Me</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'No profession available',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

const styles = {
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '20px',
  },
  fullName: {
    fontSize: '2em',
    fontWeight: 'bold',
    margin: '0',
  },
  bio: {
    fontSize: '1.5em',
    margin: '10px',
  },
  profession: {
    fontSize: '1.2em',
    margin: '10px',
  },
};

export default Profile;
