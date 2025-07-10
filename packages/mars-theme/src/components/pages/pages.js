import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Page from "./page";
import FrontPage from "./front-page";
import About from "./about";
import Contact from "./contact";
import Solutions from "./solutions";
import Solution from "./solution";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Pages = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const page = data.isArchive? {} : state.source[data.type][data.id];

  const pageType = data.isArchive? {} : page.meta_box.page_type;

  return (
    <>
        {/* Add some metatags to the <head> of the HTML. */}
        <Switch>
            <Solution when={pageType == "solution"} />
            <Solutions when={pageType == "solutions"} />
            <Contact when={pageType == "contact"} />
            <About when={pageType == "about"} />
            <FrontPage when={pageType == "home" || data.isHome} />
            <Page when={data.isPage} />
        </Switch>
    </>
  );
};

export default connect(Pages);