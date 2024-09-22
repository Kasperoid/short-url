import { MobMenuStyled } from '../../styles/header/MobMenuStyled';
import { ButtonStyled } from '../../styles/global/ButtonStyled';
import { scrollToElement } from '../../helpers/scrollToElem';

interface HeaderMobMenuProps {
  openMenu: boolean;
  options: optionsHeaderLinks[];
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

type optionsHeaderLinks = {
  text: string;
  to: string;
};

const HeaderMobMenu = ({
  openMenu,
  options,
  setOpenMenu,
}: HeaderMobMenuProps) => {
  const onClickHandler = (id: string) => {
    scrollToElement(id);
    setOpenMenu(false);
  };
  return (
    <MobMenuStyled vertical gap={5} $active={openMenu}>
      {options.map((item, index) => (
        <ButtonStyled
          shape={'circle'}
          key={index + 1}
          onClick={() => onClickHandler(item.to)}
        >
          {item.text}
        </ButtonStyled>
      ))}
    </MobMenuStyled>
  );
};

export default HeaderMobMenu;
