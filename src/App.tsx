import { Learn, LessonsList } from 'pages';
import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>

            <Link to="/">TODO: logo & home</Link>

            <Switch>
              <Route exact path="/" component={LessonsList} />
              <Route path="/learn/:levelName" component={Learn} />
              <Redirect to="/" />
            </Switch>

    </BrowserRouter>
  );
};

export default App;
