import { useState } from 'react';
import { HeaderContainerStyled } from '../../styles/header/HeaderContainerStyled';
import { ContainerStyled } from '../../styles/containers/ContainerStyled';
import { ContainerInnerStyled } from '../../styles/containers/ContainerInnerStyled';
import HeaderMenuNav from './HeaderMenuNav';
import HeaderMobMenu from './HeaderMobMenu';

type optionsHeaderLinks = {
  text: string;
  to: string;
};

const HeaderContainer = () => {
  const options: optionsHeaderLinks[] = [
    { text: 'Features', to: 'inputShort' },
    { text: 'Resources', to: 'statistic' },
  ];
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <ContainerStyled>
      <ContainerInnerStyled>
        <HeaderContainerStyled>
          <HeaderMenuNav options={options} setOpenMenu={setOpenMenu} />
          <HeaderMobMenu
            options={options}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
        </HeaderContainerStyled>
      </ContainerInnerStyled>
    </ContainerStyled>
  );
};

export default HeaderContainer;
