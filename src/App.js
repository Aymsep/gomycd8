import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://via.placeholder.com/150',
      profession: 'Web Developer'
    },
    shows: false,
    mountedTime: null
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });
    setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
  }

  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <img src={imgSrc} alt="Profile" />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Mounted Time: {mountedTime && mountedTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
