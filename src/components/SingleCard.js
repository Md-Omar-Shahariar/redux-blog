import React from "react";
import dateFormat from "dateformat";

const SingleCard = ({ data }) => {
  const { img, category, title, Author, AuthorImg } = data;
  return (
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" src={img} alt="" />
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between items-start">
        <div class="flex-1  justify-items-start">
          <p class="text-sm font-medium text-indigo-600">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {category}
            </span>
          </p>
          <a href="#" class="block mt-1">
            <p class="text-xl font-semibold text-gray-900">{title}</p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src={AuthorImg} alt="" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900 hover:underline">
              {Author}
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">
                {dateFormat(Date(), "dd-mm-dS, yyyy")}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span> {parseInt(Math.random() * 60)} min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
