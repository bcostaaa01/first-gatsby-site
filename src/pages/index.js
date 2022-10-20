import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I created this project to learn GatsbyJS</p>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

export default IndexPage;
