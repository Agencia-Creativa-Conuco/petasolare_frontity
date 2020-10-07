import React from "react";
import { connect, styled, decode, css } from "frontity";
import {Containers, Rows, Cols, Section, mq} from "../layout";
import Item from "./posts-list-item";
import Pagination from "./pagination";

const PostsList = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Section>
      <Container>
        <Row>
          <Col>
            {/* If the list is a taxonomy, we render a title. */}
            {data.isTaxonomy && (
              <Header color={state.theme.color.primary.base}>
                {data.taxonomy}:{" "}
                <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
              </Header>
            )}
          </Col>
        </Row>
        <Row>
          {/* Iterate over the items of the list. */}
          {data.items.map(({ type, id }, index) => {
            const item = state.source[type][id];

            const isPrincipal = index==0;
            const isSecondary = index==0 || (index % 4 ==0 || (index - 1) % 4 ==0) ;
            const isSmall = !isPrincipal && !isSecondary;
            // Render one Item component for each one.
            return (
              <Col key={item.id} size={12} sizeMD={isPrincipal? 12 : isSecondary? 7 : 5}>
                <Item item={item} {...{isPrincipal, isSecondary, isSmall}} />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            <Pagination />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default connect(PostsList);

const Container = styled.div`
    ${Containers}
`;

const Row = styled.div`
    ${Rows}
`;

const Col = styled.div`
    ${Cols}
`;

const Header = styled.h3`
  ${({color})=>css`
    font-weight: 300;
    text-transform: capitalize;
    color: ${color};
  `}
`;
