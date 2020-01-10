import { LessonOverview, LessonsList } from 'pages';
import React, { Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { LessonWrite } from 'pages/lesson-write/lesson-write';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Header from 'layout/header';

// TODO: move theme to another file
const theme = createMuiTheme({
  overrides: {
    MuiBreadcrumbs: {
      root: {
        marginBottom: '1rem'
      }
    }
  }
});

const App: React.FC = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
          <Header/>

          <Container maxWidth="md" style={{ paddingTop: '1rem' }}>
            <Switch>
              <Route exact path="/" component={LessonsList}/>
              <Route path="/lesson/:lessonId" component={LessonOverview} exact/>
              <Route path="/lesson/:lessonId/write" component={LessonWrite} exact/>
              <Redirect to="/"/>
            </Switch>
          </Container>

        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
