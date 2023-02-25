import React from 'react';

const Course = () => {
    return (
        <div className='flex w-full  justify-evenly bg-white text-white' style={{gap:'1px'}}>
            <div className='p-3 text-center hover:font-bold w-full' style={{ backgroundColor: "#530A0A" }}>
                <h1 className=''>Java</h1>
            </div>
            <div className='columns-1 p-3 justify-center lg:flex hidden text-center hover:font-bold w-full ' style={{ backgroundColor: "#530A0A"  }}>
                <h1>UI/UX</h1>
            </div>
            <div className='p-3 text-center justify-center lg:flex hidden hover:font-bold w-full' style={{ backgroundColor: "#530A0A" }}>
                <h1>Theme</h1>
            </div>
            <div className='p-3 text-center justify-center lg:flex hidden hover:font-bold w-full' style={{ backgroundColor: "#530A0A" }}>
                <h1>Templete</h1>
            </div>
            <div className='p-3 text-center hover:font-bold w-full' style={{ backgroundColor: "#530A0A" }}>
                <h1>Html</h1>
            </div>
            <div className='p-3 text-center hover:font-bold w-full' style={{ backgroundColor: "#530A0A" }}>
                <h1>Graphics</h1>
            </div>
            <div className='p-3 text-center justify-center lg:flex hidden hover:font-bold w-full' style={{ backgroundColor: "#530A0A" }}>
                <h1>Animation</h1>
            </div>
            <div className='p-3 text-center justify-center hover:font-bold w-full' style={{ backgroundColor: "#530A0A" }}>
                <h1>Node</h1>
            </div>
            <div className='p-3 lg:flex hidden justify-center text-center hover:font-bold w-full' style={{ backgroundColor: "#530A0A" }}>
                <h1>Laravel</h1>
            </div>
        </div>
    );
};

export default Course;