import { LessonOverview, LessonsList } from 'pages';
import React, { Fragment, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AppBar, CssBaseline, ThemeProvider } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { RouterLink } from 'shared/components/RouterLink/RouterLink';
import { LessonWrite } from 'pages/lesson-write/lesson-write';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { AccountCircle } from '@material-ui/icons';
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

          <div style={{ paddingTop: '1rem' }}>
            <Switch>
              <Route exact path="/" component={LessonsList}/>
              <Route path="/lesson/:lessonId" component={LessonOverview} exact/>
              <Route path="/lesson/:lessonId/write" component={LessonWrite} exact/>
              <Redirect to="/"/>
            </Switch>
          </div>

        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
