import React, { FC, Fragment, useState } from 'react';
import { WriteCard } from 'pages/lesson-write/components/WriteCard';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardHeader from '@material-ui/core/CardHeader';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { RouterLink } from 'shared/components';
import Typography from '@material-ui/core/Typography';
import { useSelectedLessonSelector } from 'state/selectedLesson/selected-lesson.selectors';
import { CardContent } from '@material-ui/core';

export const LessonWriteLoaded: FC = () => {
  // TODO: selektor!!
  const selectedLesson = useSelectedLessonSelector();
  const lessonDetails = selectedLesson.data;
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentDefinitionPercentage = (currentPhraseIndex + 1) / (lessonDetails.phrases.length + 1) * 100;

  return (
    <Fragment>
      {/*TODO: breadcrumbs to component*/}
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
            <CardContent>
              TODO: U R awesome content! Nie jesteś zalogowany. ZALOGUJ SIĘ aby śledzić swoje postępy
            </CardContent>
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

  );
};
