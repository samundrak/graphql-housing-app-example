import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import client from './ApolloClient';
import store from './store/index';
import HomeView from './views/HomeView';
import PAGE404 from './views/404';
import AppartmentView from './views/ApartmentView';
// import Loading from './components/Loading';

const Loading = () => <div className="center-element">Loading...</div>;

// const AppartmentView = Loadable({
//   loader: () => import('./views/AppartmentView'),
//   loading: Loading,
// });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route
                path="/apartments/:apartmentId"
                component={AppartmentView}
              />
              <Route component={PAGE404} />
            </Switch>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
