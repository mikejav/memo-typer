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
import {
  useSubjectPagePhrasesSelector,
  useSubjectPageSubjectSelector
} from 'state/pages/subject-page/subject-page.selectors';

export const LessonWriteLoaded: FC = () => {
  // TODO: selektor lub przekazywanie danych z parenta!!
  const selectedLesson = useSubjectPageSubjectSelector();
  const selectedLessonPhrases = useSubjectPagePhrasesSelector()!;
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentDefinitionPercentage = (currentPhraseIndex + 1) / (selectedLessonPhrases.length + 1) * 100;

  return (
    <Fragment>
      {/*TODO: breadcrumbs to component*/}
      <Breadcrumbs>
        <Link color="inherit" component={RouterLink} to='/'>
          Home
        </Link>
        <Link color="inherit" component={RouterLink} to={`/lesson/${selectedLesson.id}`}>
          {selectedLesson.name}
        </Link>
        <Typography color="textPrimary">Pisz</Typography>
      </Breadcrumbs>
      {selectedLessonPhrases.length && (
        <Card style={{ textAlign: 'center' }}>
          {currentPhraseIndex === selectedLessonPhrases.length ? (
            <CardContent>
              TODO: U R awesome content! Nie jesteś zalogowany. ZALOGUJ SIĘ aby śledzić swoje postępy
            </CardContent>
          ) : (
            <Fragment>
              <LinearProgress variant='determinate' value={currentDefinitionPercentage}/>
              <CardHeader subheader={`${currentPhraseIndex + 1} z ${selectedLessonPhrases.length}`}/>
              <WriteCard
                phrase={selectedLessonPhrases[currentPhraseIndex]}
                onPhraseTypeSuccess={() => setCurrentPhraseIndex(i => i + 1)}
              />
            </Fragment>
          )}

        </Card>
      )}
    </Fragment>

  );
};
