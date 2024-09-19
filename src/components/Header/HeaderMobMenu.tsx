import React from 'react';
import { MobMenuStyled } from '../../styles/header/MobMenuStyled';
import { ButtonStyled } from '../../styles/ButtonStyled';

interface HeaderMobMenuProps {
  openMenu: boolean;
}

const HeaderMobMenu = ({ openMenu }: HeaderMobMenuProps) => {
  const options: string[] = ['Features', 'Resources'];
  return (
    <MobMenuStyled vertical gap={5} $active={openMenu}>
      {options.map((item, index) => (
        <ButtonStyled shape={'circle'} key={index + 1}>
          {item}
        </ButtonStyled>
      ))}
    </MobMenuStyled>
  );
};

export default HeaderMobMenu;
