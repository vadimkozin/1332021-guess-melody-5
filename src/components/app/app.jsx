import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WinScreen from '../win-screen/win-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import NotFound from '../not-found/not-found';
import GameScreen from "../game-screen/game-screen";
import {MAX_MISTAKE_COUNT} from "../../const";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <WelcomeScreen
              onPlayButtonClick={() => history.push(`/game`)}
              errorsCount={MAX_MISTAKE_COUNT}
            />
          )}
        />
        <Route exact path="/game">
          <GameScreen
            errorsCount={MAX_MISTAKE_COUNT}
          />
        </Route>
        <Route exact path='/login' component={AuthScreen} />
        {/* <Route exact path='/result' component={WinScreen} /> */}
        {/* <Route exact path='/lose' component={GameOverScreen} /> */}
        <Route exact
          path="/result"
          render={({history}) => (
            <WinScreen
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route exact
          path="/lose"
          render={({history}) => (
            <GameOverScreen
              onReplayButtonClick={() => history.push(`/game`)}
            />
          )}
        />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
