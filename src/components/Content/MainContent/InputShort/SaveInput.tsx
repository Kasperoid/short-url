import { useRef } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import { ButtonLinkStyled } from '../../../../styles/global/ButtonLinkStyled';
import { ButtonStyled } from '../../../../styles/global/ButtonStyled';
import { SaveInputCardStyled } from '../../../../styles/content/saveInput/SaveInputCardStyled';
import { SaveLinkContainerStyled } from '../../../../styles/content/saveInput/SaveLinkContainerStyled';
import { TextStyled } from '../../../../styles/global/TextStyled';
import { saveInput } from '../../../../types/types';

interface saveInputProps extends saveInput {
  id: string;
  copiedSet: React.Dispatch<React.SetStateAction<string | null>>;
  active: boolean;
}

const SaveInput = ({
  shortUrl,
  inputUrl,
  id,
  copiedSet,
  active,
}: saveInputProps) => {
  const onClickCopyHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    clipboard.copy(shortUrl);
    copiedSet(btnCopyRef.current?.id ? btnCopyRef.current.id : null);
    const timer = setTimeout(() => {
      copiedSet(null);
      clearTimeout(timer);
    }, 1500);
  };

  const clipboard = useClipboard();
  const btnCopyRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  return (
    <SaveInputCardStyled align="center" justify="space-between">
      <TextStyled color={'quaternary'} size={'mainText'}>
        {inputUrl}
      </TextStyled>
      <SaveLinkContainerStyled align="center">
        <ButtonLinkStyled
          size={'mainText'}
          color={'special'}
          type="link"
          href={shortUrl}
        >
          {shortUrl}
        </ButtonLinkStyled>
        <ButtonStyled
          className={active ? 'btn-copied' : ''}
          id={id}
          type="primary"
          color={'primary'}
          onClick={(event) => onClickCopyHandler(event)}
          ref={btnCopyRef}
        >
          {active ? 'Copied!' : 'Copy'}
        </ButtonStyled>
      </SaveLinkContainerStyled>
    </SaveInputCardStyled>
  );
};

export default SaveInput;
