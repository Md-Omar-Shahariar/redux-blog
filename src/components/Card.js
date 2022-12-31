import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDataList(data));
  }, []);

  return (
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {/* <!-- single card  --> */}
      {dataList.map((data) => (
        <SingleCard data={data}></SingleCard>
      ))}
    </div>
  );
};

export default Card;
