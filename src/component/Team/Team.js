import React from "react";
import images from "../images/arman 1.png";
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
    <div className="">
      <div className="hidden lg:grid">
        <div className="avatar my-10 flex justify-center align-middle gap-10">
          <div className="w-24 lg:flex hidden rounded-full">
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
            <img className="w-full" src={images5} />
          </div>
        </div>
        <div className="avatar my-10 flex justify-center align-middle gap-10">
          <div className="w-24 rounded-full">
            <img className="w-full" src={images8} />
          </div>
          <div className="w-24 rounded-full">
            <img src={images5} />
          </div>
          <div className="w-24 rounded-full">
            <img src={images6} />
          </div>
          <div className="w-24 rounded-full">
            <img className="w-full" src={images11} />
          </div>
        </div>
        <div className="avatar my-10 flex justify-center align-middle gap-10">
          <div className="w-24 rounded-full">
            <img className="w-full" src={images9} />
          </div>
          <div className="w-24 rounded-full">
            <img src={images10} />
          </div>
          <div className="w-24  rounded-full">
            <img src={images12} />
          </div>
        </div>
        <div className="avatar my-10 flex justify-center align-middle gap-10">
          <div className="w-24 rounded-full">
            <img className="w-full" src={images} />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="avatar my-10 flex justify-center align-middle gap-10">
          <div className="w-24 lg:flex hidden rounded-full">
            <img src={images1} />
          </div>
          <div className="w-24 rounded-full">
            <img src={images2} />
          </div>
         
        </div>
        
        
        <div className="avatar my-10 flex justify-center align-middle gap-10">
          <div className="w-24 rounded-full">
            <img className="w-full" src={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
