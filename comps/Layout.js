import React from "react";
import Head from "next/head";
import Footer from "./globalComps/Footer";
import Navbar from "./globalComps/Navbar/Navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Tech Company</title>
        <meta name="portfolio" content="Created by Eligbue" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
