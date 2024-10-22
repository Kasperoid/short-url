import { Flex } from 'antd';
import SaveInput from './SaveInput';
import { InputContainerStyled } from '../../../../styles/content/inputShort/InputContainerStyled';
import { InputContainerInnerStyled } from '../../../../styles/content/inputShort/InputContainerInnerStyled';
import { SaveInputContainerStyled } from '../../../../styles/content/inputShort/SaveInputContainerStyled';
import bg from './../../../../images/bg-shorten-desktop.svg';
import { ButtonStyled } from '../../../../styles/global/ButtonStyled';
import { InputShortStyled } from '../../../../styles/content/inputShort/InputShortStyled';
import { InputTextError } from '../../../../styles/content/inputShort/InputTextError';
import { useState, useEffect, useRef } from 'react';
import { saveInput } from '../../../../types/types';
import { fetcher } from '../../../../helpers/fetcher';
import useSWRMutation from 'swr/mutation';
import { FETCH_URL } from '../../../../constants';

const InputShortContainer = () => {
  const searchInputHandler = () => {
    saveObj.current = { id: '', shortUrl: '', inputUrl: '' };
    trigger(inputValue);
    saveObj.current = {
      ...saveObj.current,
      id: Math.random().toString(),
      inputUrl: inputValue,
    };
    setInputValue('');
  };
  const { trigger, data, error } = useSWRMutation(FETCH_URL, fetcher, {
    throwOnError: false,
  });
  const [copied, copiedSet] = useState<string | null>(null);
  const [saveInputs, setSaveInputs] = useState<saveInput[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const saveObj = useRef<saveInput>({
    id: '',
    shortUrl: '',
    inputUrl: '',
  });

  useEffect(() => {
    if (data) {
      console.log(saveObj.current);
      saveObj.current = { ...saveObj.current, shortUrl: data };
      setSaveInputs(prevState => {
        const resultState = [
          saveObj.current,
          ...prevState.filter((_, index) => index < 4),
        ];
        sessionStorage.setItem('saveInputs', JSON.stringify(resultState));
        return resultState;
      });
    }
  }, [data]);

  useEffect(() => {
    const sessionInputs: string | null = sessionStorage.getItem('saveInputs');
    sessionInputs && setSaveInputs(JSON.parse(sessionInputs));
  }, []);

  return (
    <InputContainerStyled>
      <InputContainerInnerStyled $bg={bg}>
        <Flex gap={error ? 30 : 15} align={'center'} className="inputContainer">
          <Flex flex={1} style={{ position: 'relative' }}>
            <InputShortStyled
              id="inputShort"
              value={inputValue}
              status={error ? 'error' : ''}
              placeholder="Shorten a link here..."
              onPressEnter={() => searchInputHandler()}
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
            onClick={() => searchInputHandler()}
          >
            Shorten It!
          </ButtonStyled>
        </Flex>
      </InputContainerInnerStyled>
      <SaveInputContainerStyled vertical gap={12}>
        {saveInputs.map((item, index) => (
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
