import React from "react";
import { bannerImage } from "../../static/image";

export default function Banner() {
  return (
    <div
      className="hero h-[80vh]"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-slate-900"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-5xl font-bold">
            Distant learning for further expansion
          </h1>
          <p className="mb-5 text-base md:text-lg font-light">
            Learning is a life-long journey that in fact we never find the
            terminate stop. Stop searching, enjoy the process.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
