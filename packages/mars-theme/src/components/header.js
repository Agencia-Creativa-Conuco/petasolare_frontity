import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import {Containers, Rows, Cols, mq} from "./layout";
import Switch from "@frontity/components/switch";
import Image from "@frontity/components/image";


const Header = ({ state }) => {

  const settings = state.source.settings;
  const logo = settings["site-logo"];
  
  return (
    <>
      <Container fluid>
        <Row alignCenter>
          <Col size="auto">
            {/* Site Identity */}
            <StyledLink link="/">
              {
                logo? 
                 <Logo src={logo.full_url} alt={logo.alt} />
                : 
                  <>
                    <Title>{settings["site-name"] || state.frontity.title}</Title>
                    <Description>{state.frontity.description}</Description>
                  </>
              }
            </StyledLink>
            <MobileMenu />
          </Col>
          {/* Site Nav */}
          <Col>
            <Nav />
          </Col>
        </Row>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.header`
  ${Containers}
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

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled(Image)`
  ${ ({layout}) => `
    padding: 10px 0;
  `}
`;