import React from "react";
import images from "../images/arman.png";
import images1 from "../images/amina.png";
import images2 from "../images/leu.png";
import images3 from "../images/john.png";
import images4 from "../images/sani.png";
import images5 from "../images/layla.png";
import images6 from "../images/tanvir.png";
import images7 from "../images/shihab.png";
import images8 from "../images/lia.png";
import images9 from "../images/shihab.png";
import images10 from "../images/shamima.png";
import images11 from "../images/aysha.png";
import images12 from "../images/tanvir.png";

const Team = () => {
  return (
<div>
<div className="">
      <div className="avatar my-10 justify-items-center">
        <div className="w-24 rounded-full">
          <img src={images} />
        </div>
        <div className="w-24 rounded-full">
          <img src={images1} />
        </div>
        <div className="w-24 rounded-full">
          <img src={images2} />
        </div>
        <div className="w-24 rounded-full">
          <img src={images3} />
        </div>
        <div className="w-24 rounded-full">
          <img src={images4} />
        </div>
        <div className="w-24 rounded-full">
          <img src={images5} />
        </div>
      </div>
    </div>
</div>
  );
};

export default Team;
