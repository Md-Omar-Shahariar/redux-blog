import React from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  return (
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {/* <!-- single card  --> */}
      <SingleCard />
      {/* <!-- single card  --> */}
      <SingleCard />

      {/* <!-- single card  --> */}
      <SingleCard />

      {/* <!-- single card  --> */}
      <SingleCard />
      {/* <!-- single card  --> */}
      <SingleCard />

      {/* <!-- single card  --> */}
      <SingleCard />
    </div>
  );
};

export default Card;
