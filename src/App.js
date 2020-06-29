import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';
import decode from "jwt-decode";

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./rootReducers"; 
import { isLoggedIn } from "./actions/djp";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
 
Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

if (localStorage.djpToken) {
  const user   = decode(localStorage.djpToken);
  const payload = {
    ...user,
    token: localStorage.djpToken
  }
  store.dispatch(isLoggedIn(payload));
}

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/*<Router basename={process.env.PUBLIC_URL} history={browserHistory}>*/}
              <Routes />
            {/*</Router>*/}
          </ThemeProvider>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;