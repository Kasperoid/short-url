import { Row, Col } from 'antd';
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from './../../components/Icons/Icons';
import { ContainerStyled } from '../../styles/containers/ContainerStyled';
import { ContainerInnerStyled } from '../../styles/containers/ContainerInnerStyled';
import { FooterContainerStyled } from '../../styles/footer/FooterContainerStyled';
import { FooterInnerContainerStyled } from '../../styles/footer/FooterInnerContainerStyled';
import { LogoIconStyled } from '../../styles/global/LogoIconStyled';
import FooterLinks from './FooterLinks';
import { FooterSocialsContainerStyled } from '../../styles/footer/FooterSocialsContainerStyled';
import { ButtonIconStyled } from '../../styles/global/ButtonIconStyled';

type linksColumnType = {
  key: number;
  columnTitle: string;
  columnLinks: string[];
};

const FooterContainer = () => {
  const linksColumns: linksColumnType[] = [
    {
      key: Math.random(),
      columnTitle: 'Features',
      columnLinks: ['Link shortening', 'Analytics'],
    },
    {
      key: Math.random(),
      columnTitle: 'Company',
      columnLinks: ['About'],
    },
  ];
  const socialColumn: JSX.Element[] = [
    <FacebookIcon />,
    <TwitterIcon />,
    <PinterestIcon />,
    <InstagramIcon />,
  ];
  const columnCount: number = Math.floor(24 / (linksColumns.length + 1));

  return (
    <ContainerStyled $bgc="secondaryDark">
      <ContainerInnerStyled>
        <FooterContainerStyled>
          <FooterInnerContainerStyled justify="space-between" align="top">
            <LogoIconStyled $footer={true} fillcolor="tertiary" />
            <Row gutter={[50, 50]}>
              {linksColumns.map((item) => (
                <Col md={columnCount} sm={12} xs={24} key={item.key}>
                  <FooterLinks
                    columnLinks={item.columnLinks}
                    columnTitle={item.columnTitle}
                  />
                </Col>
              ))}
              <Col lg={columnCount} xs={24}>
                <FooterSocialsContainerStyled>
                  {socialColumn.map((item, index) => (
                    <ButtonIconStyled icon={item} key={index + 1} />
                  ))}
                </FooterSocialsContainerStyled>
              </Col>
            </Row>
          </FooterInnerContainerStyled>
        </FooterContainerStyled>
      </ContainerInnerStyled>
    </ContainerStyled>
  );
};

export default FooterContainer;
