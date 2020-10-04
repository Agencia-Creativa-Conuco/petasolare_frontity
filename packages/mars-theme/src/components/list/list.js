import React from "react";
import { connect, styled, decode } from "frontity";
import Switch from "@frontity/components/switch";
import Archive from "./archive";
import PostsList from "./posts-list";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Switch>
        <PostsList when={true} />
        <Archive when={false} />
      </Switch>
    </>
  );
};

export default connect(List);
