import { LessonOverview, SubjectsList } from 'pages';
import React, { Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Layout } from 'layout';
import { muiTheme } from 'mui-theme';
import { LessonWrite } from 'pages/lesson-write/lesson-write';

const App: React.FC = () => {

  return (
    <Fragment>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline/>
        <BrowserRouter>

          <Layout>
            <Switch>
              <Route path="/" exact component={SubjectsList}/>
              <Route path="/lesson/:lessonId" component={LessonOverview} exact/>
              <Route path="/lesson/:lessonId/write" component={LessonWrite} exact/>
              {/*<Route path="/insights" component={Insights} exact/>*/}
              <Redirect to="/"/>
            </Switch>
          </Layout>

        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
