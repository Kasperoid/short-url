import { Flex } from 'antd';
import SaveInput from './SaveInput';
import { InputContainerStyled } from '../../../../styles/content/inputShort/InputContainerStyled';
import { InputContainerInnerStyled } from '../../../../styles/content/inputShort/InputContainerInnerStyled';
import { SaveInputContainerStyled } from '../../../../styles/content/inputShort/SaveInputContainerStyled';
import bg from './../../../../images/bg-shorten-desktop.svg';
import { ButtonStyled } from '../../../../styles/ButtonStyled';
import { InputShortStyled } from '../../../../styles/content/inputShort/InputShortStyled';
import { InputTextError } from '../../../../styles/content/inputShort/InputTextError';
import { useState, useEffect } from 'react';
import { errorType, saveInput } from '../../../../types/types';
import { fetcher } from '../../../../helpers/fetcher';
import { useSWRConfig } from 'swr';
import { FETCH_URL } from '../../../../constants';
import axios from 'axios';

const InputShortContainer = () => {
  const inputButtonClickHandler = async () => {
    try {
      setError(null);
      const originalUrl = inputValue;
      setInputValue('');
      const resultUrl = await mutate(FETCH_URL, fetcher(originalUrl));
      const resultObj: saveInput = {
        id: Math.random().toString(),
        inputUrl: originalUrl,
        shortUrl: resultUrl,
      };
      setSaveInput((prevState) => {
        const resultState = [
          resultObj,
          ...prevState.filter((_, index) => index < 4),
        ];
        sessionStorage.setItem('saveInputs', JSON.stringify(resultState));
        return resultState;
      });
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const errorObj: errorType = {
          message: e.response?.data,
        };
        setError(errorObj);
      }
    }
  };

  useEffect(() => {
    const sessionInputs: string | null = sessionStorage.getItem('saveInputs');
    sessionInputs && setSaveInput(JSON.parse(sessionInputs));
  }, []);

  const { mutate } = useSWRConfig();
  const [error, setError] = useState<errorType | null>(null);
  const [copied, copiedSet] = useState<string | null>(null);
  const [saveInput, setSaveInput] = useState<saveInput[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <InputContainerStyled>
      <InputContainerInnerStyled $bg={bg}>
        <Flex gap={error ? 30 : 15} align={'center'} className="inputContainer">
          <Flex flex={1} style={{ position: 'relative' }}>
            <InputShortStyled
              value={inputValue}
              status={error ? 'error' : ''}
              placeholder="Shorten a link here..."
              onPressEnter={() => inputButtonClickHandler()}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(event.target.value)
              }
              allowClear
            />
            {error && <InputTextError>{error.message}</InputTextError>}
          </Flex>
          <ButtonStyled
            type="primary"
            color="primary"
            onClick={() => inputButtonClickHandler()}
          >
            Shorten It!
          </ButtonStyled>
        </Flex>
      </InputContainerInnerStyled>
      <SaveInputContainerStyled vertical gap={12}>
        {saveInput.map((item, index) => (
          <SaveInput
            key={index + 1}
            {...item}
            id={item.id}
            copiedSet={copiedSet}
            active={copied === item.id ? true : false}
          />
        ))}
      </SaveInputContainerStyled>
    </InputContainerStyled>
  );
};

export default InputShortContainer;
