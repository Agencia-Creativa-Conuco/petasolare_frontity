import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Script from "@frontity/components/script";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import List from "./list";
import Post from "./post";
import Pages from "./pages";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import globalStyles from "./styles/global-styles";
import FontFace from "./styles/font-faces";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles(state.theme.colors)} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      <Wrapper>
        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main>
          <Switch>
            <Loading when={data.isFetching} />
            <Pages when={data.isPage} />
            <Post when={data.isPostType} />
            <List when={data.isArchive} />
            <PageError when={data.isError} />
          </Switch>
        </Main>

        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Wrapper>

      <Script code={`
        const body = document;
        
        body.addEventListener('scroll', e => {
          e.preventDefault();
          
          frontity.actions.theme.menuIsOnTop(window.scrollY);
        });
      `} />
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  ${({headerBg})=>css`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${headerBg};
  `}
`;

const FooterContainer = styled.div``;

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;
