import React from 'react';
import { ThemeProvider } from 'styled-components';

// PAGES
import { ManageGoalPage } from '~/features/manageGoal/pages/ManageGoalPage';

// STYLED
import { Normalize } from 'styled-normalize';
import { GlobalStyledApp } from './App.styles';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Normalize />
      <GlobalStyledApp />

      {/* Insert routing logic here */}
      <ManageGoalPage />
    </ThemeProvider>
  );
};

export default App;
