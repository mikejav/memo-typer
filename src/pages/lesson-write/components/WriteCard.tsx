import React, { FC, Fragment, useState } from 'react';
import CardContent from '@material-ui/core/CardContent';
import { WriteInput } from 'pages/lesson-write/components/WriteInput';
import CardHeader from '@material-ui/core/CardHeader';
import { Phrase } from 'models/Phrase';

interface WriteCardProps {
  phrase: Phrase;
  onPhraseTypeSuccess: () => void;
}

export const WriteCard: FC<WriteCardProps> = ({ phrase, onPhraseTypeSuccess }) => {

  const [alreadyTyped, setAlreadyTyped] = useState('');

  const onType = (typedString: string) => {
    if (typedString !== phrase.definition) {
      setAlreadyTyped(typedString);
      return;
    }
    setAlreadyTyped('');
    onPhraseTypeSuccess();
  };

  return (
    <Fragment>
      <CardHeader title={phrase.term}/>
      <CardContent>
        <WriteInput definition={phrase.definition} value={alreadyTyped} onType={onType}/>
      </CardContent>
    </Fragment>
  );
};
