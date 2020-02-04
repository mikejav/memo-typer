import React, { FC } from 'react';
import { Box, Card, createStyles, List, ListItem, makeStyles, Theme } from '@material-ui/core';
import { times } from 'lodash';
import { Skeleton } from '@material-ui/lab';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    termColumn: {
      width: '50%',
      height: 24,
      display: 'inline-block'
    },
    definitionColumn: {
      width: '50%',
      height: 24,
      display: 'inline-block'
    },
    termSkeleton: {
      width: '40%'
    },
    definitionSkeleton: {
      width: '40%'
    }
  })
);

export const PhrasesListLoading: FC = () => {
  const classes = useStyles();

  return (
    <Card>
      <List disablePadding>
        {times(12, i => (
          <ListItem divider key={i}>
            <Box my={1} flexGrow={1}>
              <div className={classes.termColumn}>
                <Skeleton variant='text' className={classes.termSkeleton}/>
              </div>
              <div className={classes.definitionColumn}>
                <Skeleton variant='text' className={classes.definitionSkeleton}/>
              </div>
            </Box>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
