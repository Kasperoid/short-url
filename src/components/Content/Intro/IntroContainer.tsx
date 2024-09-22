import { Col, Space, Flex } from 'antd';
import { ContainerStyled } from '../../../styles/containers/ContainerStyled';
import { ContainerInnerStyled } from '../../../styles/containers/ContainerInnerStyled';
import { ButtonStyled } from '../../../styles/global/ButtonStyled';
import { IntroSvg } from '../../Icons/Icons';
import { IntroRow } from '../../../styles/content/intro/IntroRow';
import { IntroTextContainerStyled } from '../../../styles/content/intro/IntroTextContainerStyled';
import { HStyled } from '../../../styles/global/HStyled';
import { TextStyled } from '../../../styles/global/TextStyled';
import { scrollToElement } from '../../../helpers/scrollToElem';

const IntroContainer = () => {
  return (
    <ContainerStyled>
      <ContainerInnerStyled>
        <IntroRow align={'middle'} justify={'center'} id="intro">
          <Col
            xl={9}
            lg={11}
            md={{ span: 12, order: 1 }}
            xs={{ span: 24, order: 2 }}
          >
            <IntroTextContainerStyled direction="vertical" size={0}>
              <HStyled titlelevel="h1">More than just shorter links</HStyled>
              <Space direction="vertical" size={25}>
                <TextStyled size={'mainText'}>
                  Build your brand's recognition and get detailed insights on
                  how your links are perfoming
                </TextStyled>
                <ButtonStyled
                  type={'primary'}
                  shape={'circle'}
                  color={'primary'}
                  onClick={() => scrollToElement('inputShort')}
                >
                  Get Started
                </ButtonStyled>
              </Space>
            </IntroTextContainerStyled>
          </Col>
          <Col
            xl={15}
            lg={13}
            md={{ span: 12, order: 2 }}
            xs={{ span: 18, order: 1 }}
          >
            <Flex>
              <IntroSvg />
            </Flex>
          </Col>
        </IntroRow>
      </ContainerInnerStyled>
    </ContainerStyled>
  );
};

export default IntroContainer;
