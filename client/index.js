import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import reset from './css/reset.css';
import styles from './css/app.scss';

render(
  <App />,
  document.getElementById('content')
);
