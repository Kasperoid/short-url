import { Flex } from 'antd';
import SaveInput from './SaveInput';
import { InputContainerStyled } from '../../../../styles/content/inputShort/InputContainerStyled';
import { InputContainerInnerStyled } from '../../../../styles/content/inputShort/InputContainerInnerStyled';
import { SaveInputContainerStyled } from '../../../../styles/content/inputShort/SaveInputContainerStyled';
import bg from './../../../../images/bg-shorten-desktop.svg';
import { ButtonStyled } from '../../../../styles/ButtonStyled';
import { InputShortStyled } from '../../../../styles/content/inputShort/InputShortStyled';
import { InputTextError } from '../../../../styles/content/inputShort/InputTextError';
import { useState } from 'react';
import { saveInput } from '../../../../types/types';

const InputShortContainer = () => {
  const saveInputs: saveInput[] = [
    {
      inputUrl: 'https://www.frontendmentor.io',
      shortUrl: 'https://www.fro.io',
    },
    {
      inputUrl: 'https://www.frontentor.io',
      shortUrl: 'https://www.front.io',
    },
    {
      inputUrl: 'https://www.frontendr.io',
      shortUrl: 'https://www.froawdaw.io',
    },
  ];
  const error: boolean = false;
  const [copied, copiedSet] = useState<string | null>(null);
  return (
    <InputContainerStyled>
      <InputContainerInnerStyled $bg={bg}>
        <Flex gap={error ? 30 : 15} align={'center'} className="inputContainer">
          <Flex flex={1} style={{ position: 'relative' }}>
            <InputShortStyled
              status={error ? 'error' : ''}
              placeholder="Shorten a link here..."
            />
            {error && <InputTextError>Error</InputTextError>}
          </Flex>
          <ButtonStyled type="primary" color="primary">
            Shorten It!
          </ButtonStyled>
        </Flex>
      </InputContainerInnerStyled>
      <SaveInputContainerStyled vertical gap={12}>
        {saveInputs.map((item, index) => (
          <SaveInput
            key={index + 1}
            {...item}
            id={(index + 1).toString()}
            copiedSet={copiedSet}
            active={copied === (index + 1).toString() ? true : false}
          />
        ))}
      </SaveInputContainerStyled>
    </InputContainerStyled>
  );
};

export default InputShortContainer;
