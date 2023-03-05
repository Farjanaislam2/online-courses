import React from "react";
import images from "../images/teacher.png";

import images3 from "../images/c2.avif";
import images4 from "../images/c3.avif";
import images5 from "../images/c4.avif";
import images6 from "../images/c5.avif";
import images7 from "../images/c6.avif";
import images8 from "../images/c7.avif";
import images9 from "../images/c8.avif";
import images10 from "../images/c9.avif";

const Card3 = () => {
  return (
    <div className="border-b-2 pb-10 border-white">
      <h1 className="lg:text-2xl mt-10 text-center font-bold">Our Blog</h1>
      <div className="grid mt-10 lg:pl-8 lg:pr-8 gap-8 lg:grid-cols-4 grid-cols-2 container">
        <figure>
          <img className="w-full" src={images10} alt="Shoes" />
        </figure>


        <figure>
          <img className="w-full" src={images7} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images3} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images4} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images5} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images6} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images9} alt="Shoes" />
        </figure>

        <figure>
          <img className="w-full" src={images8} alt="Shoes" />
        </figure>
      </div>
      <div className="flex justify-center">
<h1 className="text-center text-white rounded-lg p-2 mt-10 lg:text-xl w-1/4" style={{ backgroundColor: "#530A0A" }}>Load more</h1>
</div>
    </div>
  );
};

export default Card3;
