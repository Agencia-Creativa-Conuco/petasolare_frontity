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
  const {
    emails, phone, whatsapp, address, location,
    facebook, instagram, twitter
  } = settings;
  
  return (
    <>
      <StyledFooter>
        <Deco colors={state.theme.colors} />

        <Container>
          <Row alignCenter>
            <Col>
              <Info>
                {
                  whatsapp || phone? (
                    <Col size="auto" sizeMD={4} mxAuto>
                      <PhoneBox>
                        {
                          whatsapp ? (
                            <Phone link={`tel:+${whatsapp}`}>
                              <PhoneImage>
                                <WhatsappIcon/>
                              </PhoneImage>
                              <PhoneNumber>{whatsapp}</PhoneNumber>
                            </Phone>
                          ):null
                        }
                        {
                          whatsapp ? (
                            <Phone link={`tel:+${phone}`}>
                              <PhoneImage>
                                <PhoneIcon/>
                              </PhoneImage>
                              <PhoneNumber>{phone}</PhoneNumber>
                            </Phone>
                          ):null
                        }
                      </PhoneBox>
                    </Col>
                  ):null
                }
                {
                  facebook || twitter || instagram ?(
                    <Col size="auto" sizeMD={4} mxAuto>
                      <SocialBox>
                        {
                          facebook? (
                            <SocialNetwork link={facebook}>
                              <FacebookIcon />
                            </SocialNetwork>
                          ):null
                        }
                        {
                          instagram? (
                            <SocialNetwork link={instagram}>
                              <InstagramIcon />
                            </SocialNetwork>
                          ):null
                        }
                        {
                          twitter? (
                            <SocialNetwork link={twitter}>
                              <TwitterIcon />
                            </SocialNetwork>
                          ):null
                        }
                      </SocialBox>
                    </Col>
                  ):null
                }
                {
                  emails.length? (
                    <Col size="auto" sizeMD={4} mxAuto>
                      <BoxWrapper>
                        <MailBox>
                          <MailImage color={state.theme.colors.primary.base}>
                            <MailIcon/>
                            {
                              emails.map(([email], index)=>{
                                return (
                                  <Mail key={index} link={`mailto:${email}`}>{email}</Mail>
                                )
                              })
                            }
                          </MailImage>
                        </MailBox>
                      </BoxWrapper>
                    </Col>
                  ):null
                }
                {
                  address?(
                    <Col size="auto" sizeMD={4} mxAuto>
                      <AddressBox>
                        <Address link={location? location : "#"}>
                          <AddressImage>
                            <LocationIcon/>
                          </AddressImage>
                          <AddressInfo>{address}</AddressInfo>
                        </Address>
                      </AddressBox>
                    </Col>
                  ):null
                }
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
  margin-top: 10rem;
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
  white-space: pre;
`;