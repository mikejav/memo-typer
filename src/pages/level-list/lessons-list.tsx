import React, { FC, Fragment } from 'react';
import { useLessonsSelector } from 'selectors';

export const LessonsList: FC = () => {
  const lessons = useLessonsSelector();

  return (
    <Fragment>
      {
        lessons.isFetching
          ? <div>loading...</div>
          : lessons.lessonsList.map(lesson => lesson.name)
      }
    </Fragment>
  );
  // return <div>level list</div>;
};
