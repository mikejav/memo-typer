import React, { FC, Fragment } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { createStyles, Grid, IconButton, makeStyles, Paper, TextField, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    deletePhraseBtn: {
      marginBottom: -24,
      marginTop: -24,
      marginLeft: 'auto',
      borderRadius: '50%',
      zIndex: 1
    },
    insertPhraseContainer: {
      display: 'flex',
      marginBottom: -18,
      marginTop: -18,
      '&:first-of-type': {
        marginTop: 0
      },
      '&:last-of-type': {
        marginBottom: 0
      }
    },
    insertPhraseBtn: {
      borderRadius: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      zIndex: 1
    },
    appendPhraseContainer: {
      display: 'flex',
      marginBottom: -18
    }
  })
);

export const AddSubjectPhrasesForm: FC = () => {
  const classes = useStyles();
  const { register, control, errors } = useFormContext();
  const { fields, prepend, insert, remove } = useFieldArray({
    control,
    name: 'phrases',
    keyName: 'phrases',
  });

  return (
    <div>
      <div className={classes.insertPhraseContainer}>
        <Paper variant="outlined" className={classes.insertPhraseBtn}>
          <IconButton type={'button'} onClick={() => prepend({})}>
            <AddIcon/>
          </IconButton>
        </Paper>
      </div>
      {fields.map((item, index) => (
        <Fragment key={item.id || index}>
          <Grid container spacing={2} key={item.id}>
            <Grid item xs={12}>
              {/*for empty validation register make sure pass empty object  */}
              {/*TODO: create custom component for integrate material's input with form lib*/}
              {/*{console.log(!!((errors as any)?.phrases?.[index]?.term) ? 'tru' : 'fols')}*/}
              {/*{!!((errors as any)?.phrases?.[index]?.term) ? 'tru' : 'fols'}*/}
              <Controller
                control={control}
                name={`phrases[${index}].term`}
                defaultValue={''}
                as={
                  <TextField
                    label={'Term'}
                    variant='outlined'
                    fullWidth
                    name={`phrases[${index}].term`}
                    inputRef={register({ required: true })}
                    error={!!((errors as any)?.phrases?.[index]?.term)}
                    helperText={!!((errors as any)?.phrases?.[index]?.term) && 'field is required'}
                  />
                }
              />
            </Grid>
            <Paper variant="outlined" className={classes.deletePhraseBtn}>
              <IconButton onClick={() => remove(index)} disableRipple>
                <DeleteIcon/>
              </IconButton>
            </Paper>
            <Grid item xs={12}>
              <Controller
                control={control}
                name={`phrases.[${index}].definition`}
                defaultValue={''}
                as={
                  <TextField
                    label={'Definition'}
                    variant='outlined'
                    fullWidth
                    name={`phrases.[${index}].definition`}
                    inputRef={register({ required: true })}
                    error={!!((errors as any)?.phrases?.[index]?.definition)}
                    helperText={!!((errors as any)?.phrases?.[index]?.definition) && 'field is required'}
                  />
                }
              />
            </Grid>
          </Grid>
          <div className={classes.insertPhraseContainer}>
            <Paper variant="outlined" className={classes.insertPhraseBtn}>
              <IconButton type={'button'} onClick={() => insert(index + 1, {})}>
                <AddIcon/>
              </IconButton>
            </Paper>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
