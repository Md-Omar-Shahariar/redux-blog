import React from "react";

import lws from "../assets/lws.svg";
import search from "../assets/search.svg";
const Nav = () => {
  return (
    <div>
      <nav class="bg-slate-100 shadow-md">
        <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
          <a href="index.html">
            <img class="h-10" src={lws} alt="Learn with Sumit" />
          </a>
        </div>
      </nav>

      {/* <!-- search --> */}
      <div class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
        <input
          class="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
        <img class="inline h-6 cursor-pointer" src={search} alt="Search" />
      </div>
    </div>
  );
};

export default Nav;
