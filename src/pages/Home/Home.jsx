import React from "react";
import Banner from "./Banner";
import Courses from "./Courses";
import Feature from "./Feature";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Feature />
      <Courses/>
      <Testimonials />
    </>
  );
}
