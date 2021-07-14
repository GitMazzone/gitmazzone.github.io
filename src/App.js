import React from "react";

import Button from "components/Button";
import Card from "components/Card";
import Nav from "components/Nav";
import SmallNav from "components/SmallNav";

import "./App.css";

/**
 * Layout will be
 * Nav
 * Image with big text and CTA
 *
 */

//<p className="px-1 leading-snug tracking-wider text-white text-center text-4xl font-extrabold w-screen pt-3 pb-5 bg-black bg-opacity-10 backdrop-filter backdrop-blur-sm backdrop-opacity-80">
//         {/* TODO: replace (dream home) with word flipper */}
//       Buy your dream home with confidence.
//   </p>

export default function App() {
  const handleScheduleClick = () => {
    console.log("scheduling!");
  };

  const handleSampleReportClick = () => {
    console.log("Sample report!");
  };

  return (
    <div>
      {/* TODO: determine which nav */}
      {/* <Nav /> */}
      <SmallNav />

      <div className="relative flex flex-col justify-center items-center h-96 bg-houseSm md:bg-houseLg bg-cover md:bg-center">
        {/* TODO: choose this or the previous blur */}
        <p className="h-full mt-32 px-1 leading-snug tracking-wider text-white text-center text-4xl font-extrabold w-full bg-gradient-to-t from-black">
          {/* TODO: replace (dream home) with word flipper */}
          Buy your dream home with confidence.
        </p>

        <div className="absolute -bottom-5">
          <Button
            onClick={handleScheduleClick}
            text="Schedule Your Inspection"
          ></Button>
        </div>
      </div>

      <div className="mt-14 px-2">
        <p className="leading-snug tracking-wider text-center text-4xl font-extrabold">
          Why Core Inspection?
        </p>

        {/* TODO: set max widths of cards, make a grid of 2x2 */}
        <div className="flex flex-col md:flex-row">
          <Card
            backgroundImage="bg-sampleReport"
            text="Know What You're Buying: View a Sample Report"
            alt="Sample report"
            onClick={handleSampleReportClick}
          ></Card>
          <Card
            backgroundImage="bg-experience"
            text="30+ Years of Experience"
            alt="30 years of experience"
            onClick={handleSampleReportClick}
          ></Card>
          <Card
            backgroundImage="bg-oneFifty"
            text="150-Point Inspection"
            alt="150-point inspection"
            onClick={handleSampleReportClick}
          ></Card>
          <Card
            backgroundImage="bg-certified"
            text="InterNACHI Certified & Insured"
            alt="InterNACHI certified and insured"
            onClick={handleSampleReportClick}
          ></Card>
        </div>
      </div>

      <div className="mt-14 px-2">
        <p className="leading-snug tracking-wider text-center text-4xl font-extrabold">
          Services
        </p>

        {/* TODO: sizing, alignment, phone number & icon */}
        <p>Don't see a time that works for you? Give us a call.</p>

        {/* TODO: set max widths of cards, make a grid of 2x2 */}
        <div className="flex flex-col md:flex-row">
          <Card
            backgroundImage="bg-residential"
            text="Book Residential"
            alt="Residential booking"
            onClick={handleSampleReportClick}
          ></Card>
          <Card
            backgroundImage="bg-commercial"
            text="Book Commercial"
            alt="Commercial booking"
            onClick={handleSampleReportClick}
          ></Card>
          <Card
            backgroundImage="bg-drone"
            text="Modern Inspection"
            alt="Modern inspection"
            onClick={handleSampleReportClick}
          ></Card>
        </div>
      </div>

      <div className="mt-14 px-2">
        <p className="leading-snug tracking-wider text-center text-4xl font-extrabold">
          The Process
        </p>

        {/* TODO: simple outline of the steps involved */}
      </div>

      <div className="mt-14 px-2">
        <p className="leading-snug tracking-wider text-center text-4xl font-extrabold">
          Testimonials
        </p>

        {/* TODO: reviews from Google, HomeAdvisor, etc */}
      </div>

      <div className="mt-14 px-2">
        <p className="leading-snug tracking-wider text-center text-4xl font-extrabold">
          Get in Touch
        </p>

        {/* TODO: sizing, alignment, & icon */}
        <p>We'll reply within a business day.</p>

        {/* TODO: email form and phone */}
      </div>

      {/* TODO: footer */}
    </div>
  );
}
