import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { useSelector } from "react-redux";

const Card = () => {
  const [dataList, setDataList] = useState([]);
  const { searchText } = useSelector((state) => state);

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
        .map((data) => (
          <SingleCard data={data}></SingleCard>
        ))}
    </div>
  );
};

export default Card;
