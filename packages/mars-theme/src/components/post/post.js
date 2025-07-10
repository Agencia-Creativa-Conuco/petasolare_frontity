import React, { useEffect } from "react";
import { connect, styled, css, Global } from "frontity";
import Link from "../link";
import List from "../list";
import FeaturedMedia from "../featured-media";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";
import postsStyles from "../styles/posts-styles";

import Bootstrap from "bootstrap/dist/css/bootstrap-grid.min.css";

const Post = ({ state, actions, libraries }) => {
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
      <Global styles={styles({state, actions, libraries})} />
    
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
                {/* Only display author and date on posts */}
                {data.isPost && (
                  <MetaData>
                    {author && (
                      <StyledLink link={author.link}>
                        <Author>
                          By <b>{author.name}</b>
                        </Author>
                      </StyledLink>
                    )}
                    <DateWrapper>
                      {" "}
                      on <b>{date.toDateString()}</b>
                    </DateWrapper>
                  </MetaData>
                )}
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

export default connect(Post);

const SectionComponent = styled(Section)``;



const PostHeader = styled.div`
  text-align: center;
`;

const PostMedia = styled.div``;

const Title = styled.h1`
  margin: 0;
  margin-top: 0;
  margin-bottom: 4rem;
`;

const MetaData = styled.div`
  padding: 1rem 0;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  font-size: 0.9em;
  display: inline;
`;

const DateWrapper = styled.p`
  font-size: 0.9em;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

const styles = (props) => css`
  ${postsStyles(props)}
  ${Bootstrap}
`;