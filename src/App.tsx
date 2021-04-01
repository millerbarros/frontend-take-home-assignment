import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// PAGES
import { ListGoals } from '~/features/listGoals/pages/ListGoals';
import { ManageGoalPage } from '~/features/manageGoal/pages/ManageGoalPage';

// HOOKS
import { useListGoals } from './shared/hooks';

// STYLED
import { Normalize } from 'styled-normalize';
import { GlobalStyledApp } from './App.styles';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Normalize />
      <GlobalStyledApp />

      <Router>
        <Switch>
          <Route exact path="/goals">
            <ListGoals />
          </Route>

          <Route path="/goals/:slug">
            <ManageGoalPage />
          </Route>

          <Route path="*">
            <Redirect to="/goals" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
