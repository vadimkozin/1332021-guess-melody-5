import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = ({errorCount}) => (
  <WelcomeScreen errorCount={errorCount}></WelcomeScreen>
);

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
