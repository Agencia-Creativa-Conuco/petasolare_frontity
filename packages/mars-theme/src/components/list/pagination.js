import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import {Container, Row, Col} from "@osirispp/frontity-layout";

/**
 * Pagination Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Pagination = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link
  const { next, previous } = state.source.get(state.router.link);

  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);

  return (
    <Container>
      <Row>
        <Col size="auto"mrAuto>
          {/* If there's a next page, render this link */}
          {next && (
            <Link link={next}>
              <Text>← Posts Anteriores</Text>
            </Link>
          )}
        </Col>
        {previous && next && " - "}
        <Col size="auto" mlAuto>
          {/* If there's a previous page, render this link */}
          {previous && (
            <Link link={previous}>
              <Text>Posts Recientes →</Text>
            </Link>
          )}
        </Col>
      </Row>


    </Container>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Pagination);



const Text = styled.em`
  display: inline-block;
  margin-top: 16px;
  background-color: #F0F0F0;
  padding: 1rem;
  border-radius: 1rem;
`;
