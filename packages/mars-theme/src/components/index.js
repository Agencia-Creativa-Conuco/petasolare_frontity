import React from "react";
import { Global, css, connect, styled, Head, loadable } from "frontity";
import Script from "@frontity/components/script";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import Loading from "./loading";
import Title from "./title";
import globalStyles from "./styles/global-styles";
import FontFace from "./styles/font-faces";
import Modal from "./modal";

const List = loadable(()=>import("./list"));
const PageError = loadable(()=>import("./error"));
const Post = loadable(()=>import("./post"));
const Pages = loadable(()=>import("./pages"));
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, libraries, actions }) => {
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
      <Global styles={globalStyles({state, libraries, actions})} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      <Wrapper>
        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main>
          <Switch>
            <LoadingWrapper when={data.isFetching}>
              <Loading />
            </LoadingWrapper>
            <Pages when={data.isPage} />
            <Post when={data.isPostType} />
            <List when={data.isArchive} />
            <PageError when={data.isError} />
          </Switch>
        </Main>

        <FooterContainer>
          <Footer />
        </FooterContainer>

        <Modal />
      </Wrapper>
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
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
`;