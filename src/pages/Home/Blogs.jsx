import React from "react";
import BlogCard from "../../components/BlogCard";
import { blogData } from "../../static/data";

export default function Blogs() {
  return (
    <div className="section">
      <h2 className="section-title">Our Blogs</h2>
      <div className="card-parent">
        {blogData.map((blog) => (
            <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
}
