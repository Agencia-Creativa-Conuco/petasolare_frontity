import React, { useEffect } from "react";
import { connect, styled, css, Global } from "frontity";
import Link from "../../link";
import List from "../../list";
import FeaturedMedia from "../../featured-media";
import {Containers, Rows, Cols, Section, mq} from "../../layout";

import Bootstrap from "bootstrap/dist/css/bootstrap-grid.min.css";

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Get Gutenberg css url
  const apiURL = new URL(state.source.api);
  const gutenbergCSS = apiURL.origin + "/wp-includes/css/dist/block-library/style.min.css";

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
      <Global styles={postStyles({gutenbergCSS})} />
    
      <SectionComponent as="article">
        <Container>
          <Row>
            <Col>
              {/* Look at the settings to see if we should include the featured image */}
              {state.theme.featured.showOnPost && (
              <PostMedia>
                <FeaturedMedia media={post.featured_media} size="45%" />
              </PostMedia>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <PostHeader>
                <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </PostHeader>
            </Col>
          </Row>
          {/* Render the content using the Html2React component so the HTML is processed
          by the processors we included in the libraries.html2react.processors array. */}
          <Row>
            <Col>
              <Content>
                <Html2React html={post.content.rendered} />
              </Content>
            </Col>
          </Row>
        </Container>
      </SectionComponent>
    </>
  ) : null;
};

export default connect(Page);

const SectionComponent = styled(Section)``;

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const PostHeader = styled.div`
  text-align: center;
`;

const PostMedia = styled.div``;

const Title = styled.h1`
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

const postStyles = ({gutenbergCSS}) => css`
    ${Bootstrap}
    @import "${gutenbergCSS}";
`;