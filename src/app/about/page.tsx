import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
//   title: {
//     absolute: "About Page",
//   },
title:"About Page",
  description: "This is the about",
  openGraph:{
    images:["https://dummyimage.com/1200x630/000/fff.png"],
  }
};

const AboutPage = () => {
  return <div className="p-10">This is the dummy blog.</div>;
};

export default AboutPage;
