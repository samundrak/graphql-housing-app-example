import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import client from './ApolloClient';
import configureStore from './store/configureStore';
import HomeView from './views/HomeView';
import PAGE404 from './views/404';
// import ApartmentView from './views/ApartmentView';
import LocationsView from './views/LocationsView';
import SearchView from './views/SearchView';
import AppLayout from './components/AppLayout';

// import Loading from './components/Loading';
//
const Loading = () => <div className="center-element">Loading...</div>;

const ApartmentView = Loadable({
  loader: () => import('./views/ApartmentView'),
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
