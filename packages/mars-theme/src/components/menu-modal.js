import React from "react";
import { styled, connect, css } from "frontity";
import Link from "./link";
import {Containers,Rows, Cols, mq, Section} from "./layout";
import MenuToggle from "./menu-toggle";

const MenuModal = ({ state, libraries }) => {
  return (
    <>
      <MenuWrapper bgColor={state.theme.colors.background.headerMobile}>
        <Section as="div" thin>
          <Container>
            {/* <Row>
              <Col size="auto" mlAuto>
                <MenuToggle />
              </Col>
            </Row> */}
            <NavContainer>
              {
                state.theme.menu.main.items.map((item) => {
                // Check if the link matched the current page url
                const isCurrentPage = state.router.link === item.url;
                const link = libraries.theme.getURL(state, libraries, item.url);
                return (
                  <NavItem size="12" key={item.ID||item.title}>
                    {/* If link url is the current page, add `aria-current` for a11y */}
                    <StyledLink link={link} aria-current={isCurrentPage ? "page" : undefined}>
                      {item.title}
                    </StyledLink>
                  </NavItem>
                );
              })
            }
            </NavContainer>
          </Container>
        </Section>
      </MenuWrapper>
    </>
  );
};

export default connect(MenuModal);

const MenuWrapper = styled.div`
  ${({bgColor})=>css`
    background-color: ${bgColor};
    width: 100%;
    height: 100%;
    overflow: hidden auto;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    padding-top: 8rem; 
    ${mq.lg}{
      display: none;
    }
  `}
`;

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const NavContainer = styled.nav`
  ${Rows}
`;

const NavItem = styled.div`
  ${Cols}
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-shadow: 0 0rem 0.5rem rgba(0,0,0,0.5);
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem 0;
  display: block;
`;


