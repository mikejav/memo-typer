import React, { FC, Fragment } from 'react';
import { useLessonsSelector } from 'selectors';

export const LessonsList: FC = () => {
  const lessons = useLessonsSelector();

  return (
    <Fragment>
      {
        lessons.isFetching
          ? <div>Loading</div>
          : <div>Loaded</div>
      }
    </Fragment>
  );
  // return <div>level list</div>;
};
