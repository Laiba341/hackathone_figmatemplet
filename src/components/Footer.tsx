import React from 'react'

const Footer = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6 ">
    <div className="first w-full flex flex-wrap items-start justify-between gap-6">
      {/* Intro Section */}
      <div className="intro flex flex-col gap-2 w-full lg:w-auto">
        <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">MORENT</h1>
        <p className="text-gray-500 text-center lg:text-left w-[300px]">
          Our vision is to provide convenience and help increase your sales business.
        </p>
      </div>
  
      <div className="lists flex flex-wrap gap-10 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
        <div className="about">
          <ul className="flex flex-col gap-1">
            <li className="font-bold text-lg"><h1>About</h1></li><br></br>
            <li>How it works</li><br></br>
            <li>Featured</li><br></br>
            <li>Partnership</li><br></br>
            <li>Business Relation</li><br></br>
          </ul>
        </div>
        <div className="community">
          <ul className="flex flex-col gap-1">
            <li className="font-bold text-lg"><h1>Community</h1></li><br></br>
            <li>Events</li><br></br>
            <li>Blog</li><br></br>
            <li>Podcast</li><br></br>
            <li>Invite a friend</li><br></br>
          </ul>
        </div>
        <div className="socials">
          <ul className="flex flex-col gap-1">
            <li className="font-bold text-lg"><h1>Socials</h1></li><br></br>
            <li>Discord</li><br></br>
            <li>Instagram</li><br></br>
            <li>Facebook</li><br></br>
            <li>Twitter</li><br></br>
          </ul>
        </div>
      </div>
    </div>
  
    {/* Add gap above and below the line */}
    <div className="line border-t w-full border-[#e7eef6] mt-6 mb-6"></div> {/* Added mt-6 and mb-6 for margin */}
  
    <div className="last w-full flex flex-wrap items-center justify-between gap-4">
      <div className="first text-center lg:text-left w-full lg:w-auto">
        <h1 className="font-bold text-sm">©2022 MORENT. All rights reserved</h1>
      </div>
      <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
        <h1 className="font-bold text-sm">Privacy & Policy</h1> <br></br>
        <h1 className="font-bold text-sm">Terms & Conditions</h1>
      </div>
    </div>
  </div>
  
  );
}

export default Footer
