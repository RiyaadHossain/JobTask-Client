import React from "react";
import Banner from "./Banner";
import Blogs from "./Blogs";
import Courses from "./Courses";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Statictics from "./Statictics";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Feature />
      <Courses />
      <Statictics />
      <Testimonials />
      <Blogs />
      <FAQ />
    </>
  );
}
