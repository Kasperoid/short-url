import React from 'react';
import { Flex } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { HeaderBurgerMenuStyled } from '../../styles/header/HeaderBurgerMenuStyled';
import { ButtonBurgerContainerStyled } from '../../styles/header/ButtonBurgerContainerStyled';
import { HeaderMenuDescButtonStyled } from '../../styles/header/HeaderMenuDescButtonStyled';
import { ButtonMenuContainer } from '../../styles/header/ButtonMenuContainer';
import { ButtonLinkStyled } from '../../styles/global/ButtonLinkStyled';
import { LogoIconStyled } from '../../styles/global/LogoIconStyled';
import { scrollToElement } from '../../helpers/scrollToElem';

interface HeaderMenuNavProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  options: optionsHeaderLinks[];
}

type optionsHeaderLinks = {
  text: string;
  to: string;
};

const HeaderMenuNav = ({ setOpenMenu, options }: HeaderMenuNavProps) => {
  return (
    <Flex flex={1} gap={25}>
      <LogoIconStyled fillcolor={'secondaryDark'} />
      <ButtonMenuContainer flex={1}>
        <HeaderMenuDescButtonStyled gap={25}>
          {options.map((item, index) => (
            <ButtonLinkStyled
              weight="semiBold"
              size={'mainText'}
              type="link"
              key={index + 1}
              onClick={() => scrollToElement(item.to)}
            >
              {item.text}
            </ButtonLinkStyled>
          ))}
        </HeaderMenuDescButtonStyled>
        <ButtonBurgerContainerStyled>
          <HeaderBurgerMenuStyled
            icon={<MenuOutlined />}
            onClick={() => setOpenMenu((prevState) => !prevState)}
          />
        </ButtonBurgerContainerStyled>
      </ButtonMenuContainer>
    </Flex>
  );
};

export default HeaderMenuNav;
