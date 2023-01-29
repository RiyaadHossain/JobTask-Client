import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function CourseCard({
  course: { title, description, tags, status, image, ratting },
}) {
  return (
    <div className="card w-96 bg-base-200 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" className="h-64 object-cover w-full" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">
            {title}
            {status && <div className="badge badge-info badge-sm"> New</div>}
          </h2>
          <p className="text-end flex justify-end items-center">
            <span className="font-semibold mr-1">Rattings:</span> {ratting}{" "}
            <AiFillStar />
          </p>
        </div>
        <p className="text-left">{description.slice(0, 150)}....</p>
        <div className="card-actions mx-auto mt-10">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

/* <div className="card-actions">
  {tags.map((tag, i) => (
    <div key={i} className="badge badge-md badge-outline bg-slate-100">
      {tag}
    </div>
  ))}
</div> */
