import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function CourseCard({
  course: { title, description, tags, status, image, ratting },
}) {
  return (
    <div className="card w-96 bg-base-200 rounded-sm shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" className="h-64 object-cover w-full" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title font-bold">
            {title}
            {status && <div className="badge badge-info badge-sm"> New</div>}
          </h2>
          <p className="text-end flex justify-end items-center">
            <span className="font-semibold mr-1">Rattings:</span> {ratting}{" "}
            <AiFillStar className="text-amber-500"/>
          </p>
        </div>
        <p className="text-left">{description.slice(0, 150)}....</p>
        <div className="card-actions mx-auto mt-10">
          <button className="btn btn-primary btn-wide ">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

