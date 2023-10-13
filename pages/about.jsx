import Footer from "@/components/Footer";
import Head from "next/head";
import React from "react";

function About() {
  return (
    <>
      <Head>
        <title>About Evoltion</title>
        <meta name="description" content="Free tutorials"/>
      </Head>
      <h1 className="content">About Page</h1>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
