import { LessonOverview, LessonsList } from 'pages';
import React, { Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { LessonWrite } from 'pages/lesson-write/lesson-write';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { Layout } from 'layout';
import { Insights } from 'pages/insights/insights';
import { muiTheme } from 'mui-theme';
import { FirebaseApp } from 'state/firebaseApp';

const App: React.FC = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>

          <Layout>
            <Switch>
              <Route path="/" exact component={LessonsList}/>
              <Route path="/lesson/:lessonId" component={LessonOverview} exact/>
              <Route path="/lesson/:lessonId/write" component={LessonWrite} exact/>
              <Route path="/insights" component={Insights} exact/>
              <Redirect to="/"/>
            </Switch>
          </Layout>

        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
