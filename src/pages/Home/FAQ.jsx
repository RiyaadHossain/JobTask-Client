import React from "react";
import FAQCard from "../../components/FAQCard";

export default function FAQ() {
  return (
    <div className="section">
      <h2 className="section-title">Frequently Asked Question</h2>
      <div className="max-w-2xl flex flex-col gap-3 mx-auto">
        <FAQCard title="Is these course can actually works to get a professional Job?" />
        <FAQCard title="Where is it located?" />
        <FAQCard title="How can I refund my money" />
        <FAQCard title="Do you provide money guarentee offer?" />
      </div>
    </div>
  );
}
