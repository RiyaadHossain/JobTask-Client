import React from "react";
import { BiTime } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

export default function BlogDetails() {
  return (
    <div className="pt-12 pb-24 px-6 md:px-12">
      <img
        alt=""
        className="w-full lg:w-1/2 mx-auto h-96 object-cover border-slate-700 border-2 rounded-sm"
        src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <h2 className="text-3xl font-bold mt-4">
        How to Land your First Job as a Programmer
      </h2>
      <div className="flex justify-start gap-6 mt-1 mb-5">
        <div className="flex font-semibold items-center gap-2">
          26k
          <BsFillPersonFill className="text-lg" />
        </div>
        <div className="flex font-semibold items-center gap-2">
          14 Jan 2023
          <BiTime className="text-lg" />
        </div>
      </div>
      <p className="leading-relaxed">
        How to become a Developer Being a developer requires many skills, and
        there are two major factors in developing a skill: effective practice
        and support from senior developers. You need to maximise both of these
        to help you become the best developer you can be. There are three good
        ways to make sure that you're on a fast track to starting your developer
        career: Coding Bootcamps These are great, because they are designed to
        take you from little or no coding experience to job-ready in 3 months.
        This means lots of effective practice and tons of help from the
        developers running the bootcamp. The issues that you might have with
        bootcamps are that they are usually 3 months of full time study and they
        can cost from £3,000 ($4,000) to £15,000 ($20,000). That's a lot of
        money to spend, especially since you're not earning for those 3 months.
        Get a Mentor This is the perfect situation: you start coding and have a
        developer act as your mentor and tutor. They could be a friend, family
        member, or just a developer that wants to help you out. You won't get as
        much help as with a bootcamp, but having someone to turn to when you hit
        a roadblock is really useful. Also having someone checking in on you and
        making sure that you're putting in the time can help keep you on track.
        This sounds great, but getting a mentor can be hard. Not everyone knows
        someone who works as a developer, and it's a lot of extra work for the
        mentor. If you know a developer, they may say no to being your mentor
        and you need to respect that.
        <br />
        How to become a Developer Being a developer requires many skills, and
        there are two major factors in developing a skill: effective practice
        and support from senior developers. You need to maximise both of these
        to help you become the best developer you can be. There are three good
        ways to make sure that you're on a fast track to starting your developer
        career: Coding Bootcamps These are great, because they are designed to
        take you from little or no coding experience to job-ready in 3 months.
        This means lots of effective practice and tons of help from the
        developers running the bootcamp. The issues that you might have with
        bootcamps are that they are usually 3 months of full time study and they
        can cost from £3,000 ($4,000) to £15,000 ($20,000). That's a lot of
        money to spend, especially since you're not earning for those 3 months.
        Get a Mentor This is the perfect situation: you start coding and have a
        developer act as your mentor and tutor. They could be a friend, family
        member, or just a developer that wants to help you out. You won't get as
        much help as with a bootcamp, but having someone to turn to when you hit
        a roadblock is really useful. Also having someone checking in on you and
        making sure that you're putting in the time can help keep you on track.
        This sounds great, but getting a mentor can be hard. Not everyone knows
        someone who works as a developer, and it's a lot of extra work for the
        mentor. If you know a developer, they may say no to being your mentor
        and you need to respect that.
      </p>
    </div>
  );
}
