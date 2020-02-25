import React, { FC } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

export const AddSubjectDetailsForm: FC = () => {
  const { register, errors } = useFormContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label={'Nazwa'}
          variant='outlined'
          fullWidth
          name='name'
          inputRef={register({ required: true })}
          error={!!errors?.name}
          helperText={errors?.name && 'field is required'}
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
          error={!!errors?.description}
          helperText={!!errors?.description && 'field is required'}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label={'Link do okładki'}
          variant='outlined'
          fullWidth
          name='coverLink'
          inputRef={register({ required: true })}
          error={!!errors?.coverLink}
          helperText={errors?.coverLink && 'field is required'}
        />
      </Grid>
    </Grid>
  );
};
