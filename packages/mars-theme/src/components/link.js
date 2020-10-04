import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import ctas from "./styles/cta";

const Link = ({
  state,
  libraries,
  actions,
  link,
  className,
  children,
  rel,
  cta,
  color,
  bgColor,
  "aria-current": ariaCurrent,
  onClick: onClickProp,
}) => {

  // Check if the link is an external or internal link
  const isExternal = ()=>{
    const localUrl = new URL(state.frontity.url);
    let linkUrl;

    if(link.startsWith("http")){
      linkUrl = new URL(link);
      return localUrl.host !== linkUrl.host;
    }
    else if(link.startsWith("tel") || link.startsWith("mailto")){
      return true;
    }
    return false;
  }

  const route = libraries.source.parse(link);
  // Prefetch the link's content when it mounts and autoPreFetch is set to `true`
  useEffect(() => {
    if (!isExternal()) {
      if (state.theme.autoPreFetch === "all") actions.source.fetch(link);
    }
  }, []);

  const onClick = (event) => {
    // Do nothing if it's an external link
    if (isExternal()) return;

    event.preventDefault();
    
    // Set the router to the new url.
    actions.router.set(link);

    if(!route.hash){
      // Scroll the page to the top
      window.scrollTo(0, 0);
    }
    else {
      // Scroll the page to the hash
      const element = document.getElementById(route.hash.replace("#",""));
      scrollTo({ top: element.offsetTop - 50, left: 0, behavior: "smooth" });
    }

    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }

    if (state.theme.menu.isMenuVisible){
      actions.theme.hideMenu();
    }

    if (onClickProp) {
      onClickProp(event);
    }

    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <A
      // ref={ref}
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      rel={isExternal ? "noopener noreferrer" : rel}
      target={isExternal ? "_blank" : null}
      cta = {cta}
      colors = {state.theme.colors}
      color = {color}
      bgColor = {bgColor}
      onMouseEnter={() => {
        // Prefetch the link's content when the user hovers on the link
        if (state.theme.autoPreFetch === "hover" && !isExternal)
          actions.source.fetch(link);
      }}
    >
      {children}
    </A>
  );
};

export default connect(Link);

const A = styled.a`
  ${({cta}) => cta? ctas : null}
`;