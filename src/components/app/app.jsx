import React from 'react';
import PropTypes from 'prop-types';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import WinScreen from '../win-screen/win-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import NotFound from '../not-found/not-found';

const App = ({errorCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <WelcomeScreen errorCount={errorCount} {...props} />} />
        <Route exact path='/dev-artist' component={ArtistQuestionScreen}></Route>
        <Route exact path='/dev-genre' component={GenreQuestionScreen}></Route>
        <Route exact path='/login' component={AuthScreen}></Route>
        <Route exact path='/result' component={WinScreen}></Route>
        <Route exact path='/lose' component={GameOverScreen}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
