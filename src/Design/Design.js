import React from "react";

const Design = () => {
  return (
    <div>
       <div>
            <h1 className='text-center text-black text-3xl
            font-bold'>Design</h1>
        </div>
      <div
        className="flex gap-1 mt-10 justify-evenly bg-white text-white"
        style={{ gap: "1px" }}
      >
        <div
          className="p-3 text-center hover:font-bold w-full"
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1 className=""> Art</h1>
        </div>
        <div
          className="columns-1 p-3  text-center hover:font-bold w-full "
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1>UI UX</h1>
        </div>
        <div
          className="p-3 text-center lg:flex hidden justify-center hover:font-bold w-full"
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1>3d Design</h1>
        </div>
        <div
          className="p-3  text-center hover:font-bold w-full"
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1>Product</h1>
        </div>
        <div
          className="p-3  text-center  hover:font-bold w-full"
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1>Logo</h1>
        </div>
        <div
          className="p-3  text-center lg:flex hidden  hover:font-bold w-fulll"
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1>Graphics</h1>
        </div>
        <div
          className=" lg:flex hidden p-3 text-center justify-center hover:font-bold w-full"
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1>Animation</h1>
        </div>
        <div
          className="p-3 text-center lg:flex justify-center hidden hover:font-bold w-full"
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1>Packaging</h1>
        </div>
        <div
          className="p-3 lg:flex hidden justify-center text-center hover:font-bold w-full"
          style={{ backgroundColor: "#530A0A" }}
        >
          <h1>Mockup</h1>
        </div>
      </div>
    </div>
  );
};

export default Design;
