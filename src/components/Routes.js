import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import NotFoundPage from './pages/NotFoundPage';
import TimeLine from './pages/TimeLinePage';
import MyInfoPage from './pages/MyInfoPage';

class Routes extends React.Component {

  
  render() {
    return (
      <Switch>
        <Route path='/home/myinfo' component={MyInfoPage} />
        <Route path='/home/timeline' component={TimeLine} />
        <Route path='/home/dashboard' component={DashboardPage} />
        <Route path='/home/profile' component={ProfilePage} />
        <Route path='/home/tables' component={TablesPage} />
        <Route path='/home/404' component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
