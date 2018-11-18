import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import client from './ApolloClient';
import configureStore from './store/configureStore';
import HomeView from './views/HomeView';
import PAGE404 from './views/404';
import AppLayout from './components/AppLayout';

const Loading = () => <div className="center-element">Loading...</div>;

const ApartmentView = Loadable({
  loader: () => import('./views/ApartmentView'),
  loading: Loading,
});
const LocationsView = Loadable({
  loader: () => import('./views/LocationsView'),
  loading: Loading,
});
const SearchView = Loadable({
  loader: () => import('./views/SearchView'),
  loading: Loading,
});
const store = configureStore();
const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/apartments/:apartmentId" component={ApartmentView} />
            <Route path="/locations" component={LocationsView} />
            <Route path="/search" component={SearchView} />
            <Route component={PAGE404} />
          </Switch>
        </AppLayout>
      </Router>
    </Provider>
  </ApolloProvider>
);

export default App;
