/// <reference types="./index" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

// HELPERS
import { pupulateGoals } from './shared/helpers/populateGoals';

pupulateGoals();

ReactDOM.render(<App />, document.getElementById('root'));
