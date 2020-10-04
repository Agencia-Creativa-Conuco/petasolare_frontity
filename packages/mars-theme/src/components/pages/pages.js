import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Loading from "../loading";
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

  return (
    <>
        {/* Add some metatags to the <head> of the HTML. */}
        <Switch>
            <Loading when={data.isFetching} />
            <Solution when={true} />
            <Solutions when={true} />
            <Contact when={true} />
            <About when={true} />
            <FrontPage when={data.isHome} />
            <Page when={data.isPostType} />
        </Switch>
    </>
  );
};

export default connect(Pages);