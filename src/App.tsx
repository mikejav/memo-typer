import {
  Container,
  LayoutContent,
  LayoutNavbar,
  LayoutWrapper
} from 'components';
import { Learn, LevelList } from 'pages';
import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

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
              <Route path="/learn/:levelName" component={Learn} />
              <Redirect to="/" />
            </Switch>
          </Container>
        </LayoutContent>
      </LayoutWrapper>
    </BrowserRouter>
  );
};

export default App;
