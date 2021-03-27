import React, { useEffect } from "react";
import { connect, styled, css, Global} from "frontity";
import Switch from "@frontity/components/switch";
import Link from "../link";
import List from "../list";
import {Container, Row, Col, Section, mq} from "@osirispp/frontity-layout";
import Post from "./post";
import Service from "./service";
import postsStyles from "../styles/posts-styles";

import bootstrapCSS from "bootstrap/dist/css/bootstrap.min.css";

const Single = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  
  const {colors} = state.theme;

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
      <Global styles={globalStyles({state, colors})}/>

      <Switch>
        <Service when={data.type === "service"} />
        <Post/>
      </Switch>
    </>
  ) : null;
};

export default connect(Single);

const globalStyles = (props) => css`
  ${bootstrapCSS}
  ${postsStyles(props)}
`;