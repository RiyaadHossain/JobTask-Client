import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function BlogCard({
  blog: { title, description, readers, image, upload },
}) {
  return (
    <div className="card card-compact w-96 h-[400px] bg-base-200 shadow-xl">
      <figure>
        <img alt="Shoes" className="h-40 w-full object-cover" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
          <div className="flex font-semibold items-center gap-2">
            {readers}k
            <BsFillPersonFill className="text-lg" />
          </div>
          <div className="flex font-semibold items-center gap-2">
            {upload}
            <BiTime className="text-lg" />
          </div>
        </div>
        <p className=" mt-5">
          {description.slice(0, 150)}...{" "}
          <Link to="blog-details" className="link link-secondary">
            See More
          </Link>
        </p>
      </div>
    </div>
  );
}
