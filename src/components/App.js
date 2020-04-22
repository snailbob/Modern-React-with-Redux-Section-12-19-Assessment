import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";

const App = () => {
  return (
    <Router>
      <div className="ui container raised segment">
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/user/:userId" component={Posts} />
          <Route path="/post/:userId/:postId" component={Comments} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
