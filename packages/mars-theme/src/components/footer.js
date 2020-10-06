import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";
import {Containers, Rows, Cols, mq} from "./layout";
import Image from "@frontity/components/image";
import {
  WhatsappIcon, PhoneIcon,
  TwitterIcon, FacebookIcon, InstagramIcon,
  MailIcon, LocationIcon
} from "./icons";

const Footer = ({ state }) => {

  const settings = state.source.settings;
  const logo = settings["site-logo-footer"];
  
  return (
    <>
      <StyledFooter>
        <Deco colors={state.theme.colors} />

        <Container>
          <Row alignCenter>
            <Col>
              <Info>
                <Col size="auto" sizeMD={4} mxAuto>
                  <PhoneBox>
                    <Phone link="tel:+8296473439">
                      <PhoneImage>
                        <WhatsappIcon/>
                      </PhoneImage>
                      <PhoneNumber>829 647 3439</PhoneNumber>
                    </Phone>
                    <Phone link="tel:+8093824286">
                      <PhoneImage>
                        <PhoneIcon/>
                      </PhoneImage>
                      <PhoneNumber>809 382 4286</PhoneNumber>
                    </Phone>
                  </PhoneBox>
                </Col>
                <Col size="auto" sizeMD={4} mxAuto>
                  <SocialBox>
                    <SocialNetwork link="https://web.facebook.com/petasolare/?_rdc=1&_rdr">
                      <FacebookIcon />
                    </SocialNetwork>
                    <SocialNetwork link="https://www.instagram.com/petasolare/?hl=es-la">
                      <InstagramIcon />
                    </SocialNetwork>
                    <SocialNetwork link="https://twitter.com/petasolare_srl?lang=es">
                      <TwitterIcon />
                    </SocialNetwork>
                  </SocialBox>
                </Col>
                <Col size="auto" sizeMD={4} mxAuto>
                  <BoxWrapper>
                    <MailBox>
                      <MailImage color={state.theme.colors.primary.base}>
                        <MailIcon/>
                        <Mail link="mailto:info@petasolare.com">info@petasolare.com</Mail>
                        <Mail link="mailto:ingenieria@petasolare.com">ingenieria@petasolare.com</Mail>
                        <Mail link="mventao:info@petasolare.com">venta@petasolare.com</Mail>
                      </MailImage>
                    </MailBox>
                  </BoxWrapper>
                </Col>
                <Col size="auto" sizeMD={4} mxAuto>
                  <AddressBox>
                    <Address link="https://g.page/petasolare?share">
                      <AddressImage>
                        <LocationIcon/>
                      </AddressImage>
                      <AddressInfo>Ave. Juan Pablo Duarte</AddressInfo>
                      <AddressInfo>Bella Terra Mall, Mód-A121,</AddressInfo>
                      <AddressInfo>Santiago, República Dominicana</AddressInfo>
                    </Address>
                  </AddressBox>
                </Col>
              </Info>
            </Col>
          </Row>
        </Container>
      </StyledFooter>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const StyledFooter = styled.footer`
  width: 100%;
  padding-bottom: 5vw;
  position: relative;
`;

const Container = styled.div`
  ${Containers}
  z-index: 100;
  ${mq.lg}{
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const Row = styled.div`
  ${Rows}
`;

const Col = styled.div`
  ${Cols}
`;

const Deco = styled.div`
  ${({colors})=>css`
      position: absolute;
      left: 0;
      bottom: 0;
      width: 30%;
      padding-bottom: 30%;
      background-color: ${colors.primary.base};
      border-radius: 50%;
      transform: translate(-70%, 0%);
      z-index: 1;
      ${mq.sm}{
        top: 0;
        bottom: initial;
      }
      &:before{
          content: '';
          position: absolute;
          left: 50%;
          top: 0%;
          width: 75%;
          padding-bottom: 75%;
          height: 0;
          background-color: ${colors.primary.light};
          border-radius: 50%;
          transform: translate(-50%, 0);
      }
      &:after{
          content: '';
          position: absolute;
          left: 50%;
          top: 0%;
          width: 70%;
          padding-bottom: 70%;
          height: 0;
          background-color: ${colors.primary.dark};
          border-radius: 50%;
          transform: translate(-50%, 0);
      }
  `}
`;

const Logo = styled(Image)`
  ${ ({layout}) => `
    padding: 10px 0;
    position: relative;
    z-index:2;
  `}
`;

const Info = styled.div`
  ${Rows}
`;

const PhoneBox = styled.div`
  margin-bottom: 4rem;
`;

const Phone = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 1.5rem;
`;

const PhoneImage = styled.span`
  margin-right: 1rem;
  svg{
    width: 2rem;
    height: auto;
  }
`;

const PhoneNumber = styled.span``;

const SocialBox = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SocialNetwork = styled(Link)`
  display: inline-block;
  text-decoration: none;
  margin: 1rem;
  margin-top: 0;
`;

const BoxWrapper = styled.div`
  text-align: right;
`;

const MailBox = styled.div`
  text-align: center;
  display: inline-block;
  margin-bottom: 4rem;

`;

const MailImage = styled.div`
  ${({color})=>css`
    color: ${color};
    svg{
      width: 5rem;
      height: auto;
      display: inline-block;
    }
  `}
`;

const Mail = styled(Link)`
  display: block;
  text-decoration: none;
`;

const AddressBox = styled.address`
  font-style: normal;
  margin-bottom: 4rem;
`;

const AddressImage = styled.div`
  svg{
    width: 3rem;
    height: auto;
    display: inline-block;
  }
`;

const Address = styled(Link)`
    display: block;
    text-align: center;
    text-decoration: none;
`;

const AddressInfo = styled.span`
  display: block;
`;