// File: /packages/my-first-theme/src/components/index.js

import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdna, Arial, sans-serif;
          }
        `}
      />
      <Header>
        <h1>Hello Frontity</h1>
        <p>Current URL: {state.router.link}</p>
        <nav>
          <Link link="/">Home</Link>
          <br />
          <Link link="/page/2">More posts</Link>
          <br />
          <Link link="/about-us">About Us</Link>
        </nav>
      </Header>
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main>
    </>
  );
};

const Header = styled.header`
  background-color: #828282;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: black;

  h1 {
    color: maroon;
  }
`;

export default connect(Root);
