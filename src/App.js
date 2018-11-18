import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import client from './ApolloClient';
import configureStore from './store/configureStore';
import HomeView from './views/HomeView';
import PAGE404 from './views/404';
import AppartmentView from './views/ApartmentView';
import LocationsView from './views/LocationsView';
import AppLayout from './components/AppLayout';

// import Loading from './components/Loading';

const Loading = () => <div className="center-element">Loading...</div>;

// const AppartmentView = Loadable({
//   loader: () => import('./views/AppartmentView'),
//   loading: Loading,
// });
const store = configureStore();
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <AppLayout>
              <Switch>
                <Route exact path="/" component={HomeView} />
                <Route
                  path="/apartments/:apartmentId"
                  component={AppartmentView}
                />
                <Route path="/locations" component={LocationsView} />
                <Route component={PAGE404} />
              </Switch>
            </AppLayout>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
