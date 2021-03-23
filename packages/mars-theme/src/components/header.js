import React, {useEffect} from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileToggle from "./menu-toggle";
import {Containers, Rows, Cols, mq} from "./layout";
import Switch from "@frontity/components/switch";
import FeaturedMedia from "./featured-media";
import MenuModal from "./menu-modal";

const Header = ({ state, actions }) => {

  const settings = state.source.settings;
  const logo = settings["site-logo"];
  
  const { isMobileMenuOpen, colors } = state.theme;

  useEffect(() => {
    actions.theme.menuIsOnTop(window.scrollY);
  }, []);

  return (
    <>
      <StyledHeader bgColor={isMobileMenuOpen? colors.background.headerMobile : colors.background.header} isOnTop={state.theme.menu.isOnTop}>
        <Container fluid>
          <Row alignCenter>
            <Col size="auto">
              {/* Site Identity */}
              <StyledLink link="/">
                {
                  logo? 
                    <LogoContainer>
                      < Logo media={logo} height="4rem" fit="initial" loading="eager"/>
                    </LogoContainer>
                  : 
                    <>
                      <Title>{settings["site-name"] || state.frontity.title}</Title>
                      <Description>{state.frontity.description}</Description>
                    </>
                }
              </StyledLink>
            </Col>
            <Col size="auto" hiddenLG mlAuto>
              <MobileToggle />
            </Col>
            {/* Site Nav */}
            <Col size="auto" hiddenXS visibleLG mlAuto>
              <Nav />
            </Col>
          </Row>
        </Container>
        {/* If the menu is open, render the menu modal */}
        {isMobileMenuOpen && <MenuModal />}
      </StyledHeader>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StyledHeader = styled.header`
  ${({bgColor, isOnTop = true})=>css`
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: ${isOnTop? "transaparent" : bgColor};
    transition: background 0.2s ease-in-out;
    min-height: 6rem;
    padding: 1.5rem 0;
  `}
`;

const Container = styled.div`
  ${Containers}
  ${mq.lg}{
    padding-left: 4rem;
    padding-right: 4rem;
    z-index: 100;
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

const LogoContainer = styled.div`
  position: relative;
  z-index: 5;
  &:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transform: scale(2) translate(-3%, -60%);
    background-color: white;
    box-shadow: 0 2rem 2rem rgba(0,0,0,0.15);
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 50%;
    z-index: 1;
  }
`;

const Logo = styled(FeaturedMedia)`
  ${ ({layout}) => `
    padding: 10px 0;
    position: relative;
    z-index:2;
    width: 25rem;
    transform: scale(1.3);
  `}
`;