import { ButtonLinkStyled } from '../../../../styles/ButtonLinkStyled';
import { ButtonStyled } from '../../../../styles/ButtonStyled';
import { SaveInputCardStyled } from '../../../../styles/content/saveInput/SaveInputCardStyled';
import { SaveLinkContainerStyled } from '../../../../styles/content/saveInput/SaveLinkContainerStyled';
import { TextStyled } from '../../../../styles/TextStyled';
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
    const target = event.target as HTMLButtonElement;
    copiedSet(target.id);
  };
  return (
    <SaveInputCardStyled align="center" justify="space-between">
      <TextStyled color={'quaternary'} size={'mainText'}>
        {inputUrl}
      </TextStyled>
      <SaveLinkContainerStyled align="center">
        <ButtonLinkStyled size={'mainText'} color={'special'} type="link">
          {shortUrl}
        </ButtonLinkStyled>
        <ButtonStyled
          className={active ? 'btn-copied' : ''}
          id={id}
          type="primary"
          color={'primary'}
          onClick={(event) => onClickCopyHandler(event)}
        >
          <span id={id}>{active ? 'Copied!' : 'Copy'}</span>
        </ButtonStyled>
      </SaveLinkContainerStyled>
    </SaveInputCardStyled>
  );
};

export default SaveInput;
