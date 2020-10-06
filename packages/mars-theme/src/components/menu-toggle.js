import React from "react";
import { styled, connect, Global, css } from "frontity";
import { CloseIcon, HamburgerIcon } from "./menu-icon";
import {mq} from "./layout";

function MobileToggle({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  const { isOnTop } = state.theme.menu;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu} bgColor={state.theme.colors.primary.base} {...{isOnTop, isMobileMenuOpen}}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={globalStyles} />
            <CloseIcon color="white" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="white" size="24px" />
        )}
      </MenuToggle>
    </>
  );
}

export default connect(MobileToggle);

const MenuToggle = styled.button`
  ${({bgColor, isOnTop, isMobileMenuOpen})=>css`
    background: ${ isOnTop? isMobileMenuOpen? "transparent" : bgColor : "transparent"};
    border: 0;
    color: white;
    z-index: 5;
    height: 40px;
    width: 40px;
    position: relative;
    transition: background 0.2 ease-in-out;
    svg{
      margin: 0 auto;
    }
  `}
`;

const globalStyles = css`
  body{
    overflow: hidden;
    ${mq.lg}{
      overflow: initial;
    }
  }
`;