import React, { FC, useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { SelectedLessonEffects } from 'state/selectedLesson/selected-lesson.effects';
import { useSelectedLessonSelector } from 'selectors';
import { Container } from '@material-ui/core';
import { WriteCard } from 'pages/lesson-write/components/WriteCard';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardHeader from '@material-ui/core/CardHeader';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { RouterLink } from 'shared/components';
import Typography from '@material-ui/core/Typography';

export const LessonWrite: FC = () => {
  const { lessonId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SelectedLessonEffects.loadSelectedLesson(lessonId!));
  }, [lessonId]);

  const { lessonDetails, isFetching } = useSelectedLessonSelector();
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentDefinitionPercentage = (currentPhraseIndex + 1) / (lessonDetails.phrases.length + 1) * 100;

  return (
    <Container maxWidth="md">
      {/*TODO: breadcrumbs to component*/}
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <Breadcrumbs>
            <Link color="inherit" component={RouterLink} to='/'>
              Home
            </Link>
            <Link color="inherit" component={RouterLink} to={`/lesson/${lessonDetails.id}`}>
              {lessonDetails.name}
            </Link>
            <Typography color="textPrimary">Pisz</Typography>
          </Breadcrumbs>
          {lessonDetails.phrases.length && (
            <Card style={{ textAlign: 'center' }}>
              {currentPhraseIndex === lessonDetails.phrases.length ? (
                <span>U R awesome!</span>
              ) : (
                <Fragment>
                  <LinearProgress variant='determinate' value={currentDefinitionPercentage}/>
                  <CardHeader subheader={`${currentPhraseIndex + 1} z ${lessonDetails.phrases.length}`}/>
                  <WriteCard
                    phrase={lessonDetails.phrases[currentPhraseIndex]}
                    onPhraseTypeSuccess={() => setCurrentPhraseIndex(i => i + 1)}
                  />
                </Fragment>
              )}

            </Card>
          )}
        </Fragment>
      )}
    </Container>
  );
};
