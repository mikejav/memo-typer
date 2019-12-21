import React, { FC, Fragment } from 'react';
import { useLessonsSelector } from 'selectors';
import { Button, Card, CardBody, CardHeader } from 'components';
import { mb2 } from 'shared/utils/outer-spacing';

export const LessonsList: FC = () => {
  const lessons = useLessonsSelector();

  return (
    <Fragment>
      {
        lessons.isFetching
          ? <div>loading...</div>
          : lessons.lessonsList.map(lesson =>
            <Card margin={mb2} key={lesson.id}>
              <CardHeader>xxx</CardHeader>
              <CardBody>
                {lesson.name}
                <Button>xxx</Button>
              </CardBody>
            </Card>)
      }
    </Fragment>
  );
  // return <div>level list</div>;
};
