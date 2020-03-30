import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TimeLine from './pages/TimeLinePage';
import MyInfoPage from './pages/MyInfoPage';
import MemberSearchPage from './pages/MemberSearchPage';
import MemberVisitPage from './pages/MemberVisitPage';
import FriendListPage from './pages/FriendListPage';
import ActiveLogPage from './pages/ActiveLogPage';

class Routes extends React.Component {

  // /home/friends
  render() {
    return (
      <Switch>
        <Route path='/home/myinfo' component={MyInfoPage} />
        <Route path='/home/main' component={TimeLine} />
        <Route path='/home/timeline' component={TimeLine} />
        <Route path='/home/friends' component={FriendListPage} />
        <Route path='/home/search/:username' component={MemberSearchPage} />
        <Route path='/home/visit/:userId' component={MemberVisitPage} />
        <Route path='/home/activelog' component={ActiveLogPage} />
      </Switch>
    );
  }
}

export default Routes;
