import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const Card = () => {
  const [dataList, setDataList] = useState([]);
  const { searchText, category, Author, AuthorImg } = useSelector(
    (state) => state
  );
  console.log(category);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDataList(data));
  }, []);

  return (
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {/* <!-- single card  --> */}
      {dataList
        .filter((data) => {
          if (searchText) {
            return data.title.toLowerCase().includes(searchText.toLowerCase());
          }
          return true;
        })
        .filter((data) => {
          if (category) {
            return data.category === category;
          }
          return true;
        })
        .filter((data) => {
          if (Author) {
            return data.Author === Author;
          }
          return true;
        })
        .filter((data) => {
          if (AuthorImg) {
            return data.AuthorImg === AuthorImg;
          }
          return true;
        })
        .map((data) => (
          <SingleCard data={data}></SingleCard>
        ))}
    </div>
  );
};

export default Card;
