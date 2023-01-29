import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

export default function Testimonials() {
  return (
    <div className="section">
      <h2 className="section-title">Success Stories</h2>
      <div className="flex items-center justify-center gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}
