import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>Hey there!👋I am the developer behind this GatsbyJS project 🙋‍♂️</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About me</title>;
    <meta name="description" content="A page about me"></meta>
  </>
);

export default AboutPage;
