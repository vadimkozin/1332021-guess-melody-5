import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = ({errorCount}) => (
  <WelcomeScreen errorCount={errorCount}></WelcomeScreen>
);

export default App;
