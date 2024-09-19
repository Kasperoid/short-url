import React, { useState } from 'react';
import { HeaderContainerStyled } from '../../styles/header/HeaderContainerStyled';
import { ContainerStyled } from '../../styles/containers/ContainerStyled';
import { ContainerInnerStyled } from '../../styles/containers/ContainerInnerStyled';
import HeaderMenuNav from './HeaderMenuNav';
import HeaderMobMenu from './HeaderMobMenu';

const HeaderContainer = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <ContainerStyled>
      <ContainerInnerStyled>
        <HeaderContainerStyled>
          <HeaderMenuNav setOpenMenu={setOpenMenu} />
          <HeaderMobMenu openMenu={openMenu} />
        </HeaderContainerStyled>
      </ContainerInnerStyled>
    </ContainerStyled>
  );
};

export default HeaderContainer;
