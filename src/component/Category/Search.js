import React from 'react';

const Search = () => {
    return (
        <div >
            <h1 className='text-xl text-center font-semibold
             mb-7 bg-blue-200 rounded-2xl lg:ml-10 lg:mr-10 p-1 lg:bg-pink-100'>Popular Search</h1>
             <div className='ml-10'>
          <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Java</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Graphics</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Theme</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>UI/UX</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5 '>Node js</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Laravel</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Animation</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Mongo</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Theme</button>
            <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Templete</button>
             <button className='text-black hover:border-2 rounded-3xl  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 mt-5  '>Photo</button>
             <button className='text-black hover:border-2 rounded-3xl border border-black mt-3  pl-9 pr-9 pt-1 pb-2 mt-5  '>Video</button>
          </div>
        </div>
    );
};

export default Search;