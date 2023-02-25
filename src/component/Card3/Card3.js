import React from "react";
import images from "../images/teacher.png";

const Card3 = () => {
  return (
    <div className="border-b-2 pb-10 border-white">
      <div className="grid mt-20 lg:pl-8 lg:pr-8 gap-12 lg:grid-cols-4 grid-cols-2 container">
        <figure>
          <img className="w-full" src={images} alt="Shoes" />
        </figure>


        <figure>
          <img className="w-full" src={images} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images} alt="Shoes" />
        </figure>
      </div>
      <div className="flex justify-center">
<h1 className="text-center text-white rounded-lg p-2 mt-10 lg:text-xl w-1/4" style={{ backgroundColor: "#530A0A" }}>Load more</h1>
</div>
    </div>
  );
};

export default Card3;
