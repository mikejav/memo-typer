import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const muiTheme = createMuiTheme({
  overrides: {
    MuiBreadcrumbs: {
      root: {
        marginBottom: '1rem'
      }
    }
  }
});
