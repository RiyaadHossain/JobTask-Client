import React from "react";

export default function FAQCard({ title }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-left"
    >
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <p>
          Google may give refunds for some Google Play purchases, depending on
          the refund policies described below. You can also contact the
          developer directly. If a purchase was accidentally made by a friend or
          family member using your account, request a refund on the Google Play
          website. If you find a Google Play purchase on your card or other
          payment method that you didn't make and that wasn't made by anyone you
          know, report unauthorized charges within 120 days of the transaction.
          If your refund request has been approved, see how long your refund
          will take.
        </p>
      </div>
    </div>
  );
}
