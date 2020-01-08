import React, { FC, SyntheticEvent, useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';

interface WriteInputProps {
  definition: string;
  value: string;
  onType: (typedString: string) => void;
}

export const WriteInput: FC<WriteInputProps> = ({ definition, value, onType }) => {

  const nextDefinitionChar = definition.charAt(value.length);
  const isSpaceAfterNextDefinitionChar = definition.charAt(value.length + 1) === ' ';
  const [isInputFlashing, setIsInputFlashing] = useState(false);
  const textFieldRef = useRef<HTMLInputElement>(null);

  const onKeyPress = (event: any) => {
    if (nextDefinitionChar.toLowerCase() !== event.key.toLowerCase()) {
      event.preventDefault();
      flashInput();
      return;
    }

    if (isSpaceAfterNextDefinitionChar) {
      onType(value + nextDefinitionChar + ' ');
    } else {
      onType(value + nextDefinitionChar);
    }
  };

  let inputFlashingTimeout: ReturnType<typeof setTimeout>;
  const flashInput = () => {
    clearTimeout(inputFlashingTimeout);
    setIsInputFlashing(true);
    inputFlashingTimeout = setTimeout(() => {
      setIsInputFlashing(false);
    }, 300);
  };

  const preventDefault = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <TextField
      ref={textFieldRef}
      variant="outlined"
      value={value}
      onKeyPress={onKeyPress}
      onPaste={preventDefault}
      error={isInputFlashing}
    />
  );
};
