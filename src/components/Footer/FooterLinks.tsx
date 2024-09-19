import { Flex, Space } from 'antd';
import { ButtonLinkStyled } from '../../styles/ButtonLinkStyled';
import { HStyled } from '../../styles/HStyled';

type FooterLinksProps = {
  columnTitle: string;
  columnLinks: string[];
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
          >
            {item}
          </ButtonLinkStyled>
        ))}
      </Space>
    </Flex>
  );
};

export default FooterLinks;
