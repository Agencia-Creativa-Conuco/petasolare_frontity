import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import {Rows, Cols} from "./layout";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state, libraries }) => {

  const prueba = libraries.theme.getURL(state, libraries, "http://petasolare.local/wp-json/menus/v1/menus/3");
  console.log(prueba);

  return (
    <NavContainer alignCenter justifyContent="flex-end">
      {state.theme.menu.main.items.map((item) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === item.url;
        const link = libraries.theme.getURL(state, libraries, item.url);
        return (
          <NavItem size="auto" key={item.ID||item.title}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {item.title}
            </Link>
          </NavItem>
        );
      })}
    </NavContainer>
  )
};

export default connect(Nav);

const NavContainer = styled.nav`
  ${Rows}
`;

const NavItem = styled.div`
  ${Cols}
`;
