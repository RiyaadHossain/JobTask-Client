import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

export default function Testimonials() {
  return (
    <div className="section">
      <h2 className="section-title">Success Stories</h2>
      <div className="card-parent">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
