import React, { useState } from "react";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-[#7c7b7d]">
            Ankit Parihar
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Full Stack Developer focused on modern, responsive web experiences.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#7c7b7d]">
            Quick Links
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <a href="/#about" className="hover:text-white">
              About
              
            </a>
            <a href="/#skills" className="hover:text-white">
              Skills
            </a>
            <a href="/#projects" className="hover:text-white">
              Projects
            </a>
            <a href="/#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-[#7c7b7d]">
            Social Media
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              GitHub
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        Copyright (c) {new Date().getFullYear()} Ankit Parihar. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
