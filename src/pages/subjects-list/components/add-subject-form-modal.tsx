import React, { FC, Fragment } from 'react';
import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grid,
  makeStyles,
  TextField,
  Theme
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useForm } from 'react-hook-form';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  })
);

export const AddSubjectFormModal: FC = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, errors, getValues } = useForm();

  console.log(getValues());

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Fragment>
      <Fab color="primary" className={classes.fab} onClick={handleClickOpen}>
        <AddIcon/>
      </Fab>
      <Dialog open={open} onClose={handleClose} scroll='body' fullWidth>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>{'Dodaj zestaw'}</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label={'Nazwa'}
                  variant='outlined'
                  fullWidth
                  name='name'
                  inputRef={register({ required: true })}
                  error={!!errors.name}
                  helperText={errors.name?.toString()}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Opis"
                  multiline
                  variant="outlined"
                  fullWidth
                  inputRef={register({ required: true })}
                  name='description'
                  error={!!errors.description}
                  helperText={errors.description && 'field is required'}
                />
              </Grid>
            </Grid>
            <DialogContentText>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Anuluj
            </Button>
            <Button color="primary" autoFocus type='submit'>
              Dodaj
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Fragment>
  );
};
