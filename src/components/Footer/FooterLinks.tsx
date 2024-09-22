import { Flex, Space } from 'antd';
import { scrollToElement } from '../../helpers/scrollToElem';
import { ButtonLinkStyled } from '../../styles/global/ButtonLinkStyled';
import { HStyled } from '../../styles/global/HStyled';
import { linksScroll } from '../../types/types';

type FooterLinksProps = {
  columnTitle: string;
  columnLinks: linksScroll[];
};

const FooterLinks = ({ columnTitle, columnLinks }: FooterLinksProps) => {
  return (
    <Flex vertical gap={15}>
      <HStyled titlelevel="h4" color="white">
        {columnTitle}
      </HStyled>
      <Space direction="vertical" size={0}>
        {columnLinks.map((item) => (
          <ButtonLinkStyled
            key={Math.random()}
            type="link"
            weight={'semiBold'}
            colorhover={'special'}
            onClick={() => scrollToElement(item.to)}
          >
            {item.text}
          </ButtonLinkStyled>
        ))}
      </Space>
    </Flex>
  );
};

export default FooterLinks;
