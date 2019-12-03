import React from 'react';
import {
  LayoutWrapper,
  LayoutNavbar,
  LayoutContent,
  Container
} from 'components';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { LevelList, Learn } from 'pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <LayoutNavbar>
          <Container>
            <Link to="/">TODO: logo & home</Link>
          </Container>
        </LayoutNavbar>
        <LayoutContent>
          <Container>
            <Switch>
              <Route exact path="/" component={LevelList} />
              <Route path="/learn/:level" component={Learn} />
              <Redirect to="/" />
            </Switch>
          </Container>
        </LayoutContent>
      </LayoutWrapper>
    </BrowserRouter>
  );
};

export default App;
