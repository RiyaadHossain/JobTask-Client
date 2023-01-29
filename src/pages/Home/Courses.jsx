import React from "react";
import CourseCard from "../../components/CourseCard";
import { courseData } from "../../static/data";

export default function Courses() {
  return (
    <div className="section">
      <h2 className="section-title">Our Courses</h2>
      <div className="card-parent">
        {courseData.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
    </div>
  );
}
