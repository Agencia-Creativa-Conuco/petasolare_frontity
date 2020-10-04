import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item, index, isEditorial, isPrincipal, isSecondary, isSmall }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <Article>
      <StyledLink link={item.link}>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <Media>
          <FeaturedMedia 
            media={item.featured_media} 
            height="70%" 
            heightSM="56.25%" 
            heightMD={isPrincipal? "56.25%" : isSecondary? "56.25%" : "80%"}
          />
        </Media>
      )}

      <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
      </StyledLink>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
  margin-bottom: 3rem;
`;

const Media = styled.div`
  border-radius: 4rem;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;