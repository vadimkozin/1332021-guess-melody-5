import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WinScreen from '../win-screen/win-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import NotFound from '../not-found/not-found';
import GameScreen from "../game-screen/game-screen";
import {APP_TYPE} from '../../types/types';

const App = (props) => {
  const {errorsCount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={errorsCount}
            />
          )}
        />
        <Route exact path="/game">
          <GameScreen
            errorsCount={errorsCount}
            questions={questions}
          />
        </Route>
        <Route exact path='/login' component={AuthScreen} />
        <Route exact path='/result' component={WinScreen} />
        <Route exact path='/lose' component={GameOverScreen} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = APP_TYPE;

export default App;
