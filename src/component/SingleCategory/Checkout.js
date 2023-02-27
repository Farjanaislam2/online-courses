import React from 'react';

const Checkout = () => {
    return (
        <div className='bg-base-100 lg:ml-72 lg:mr-72 lg:mt-10 lg:mb-10 p-4 rounded-md'>
          <div className='' >
          <h1 className='lg:text-2xl mt-2 mb-4'>Billing Details</h1>
            <p >Naviea collects and uses personal data in accordance with our <strong> Privacy Policy.</strong> By creating an account, you agree to our <strong>Terms and Conditions</strong>.</p>

          </div>
          <div className="divider"></div> 
<div className='ml-16'>
    <h1 className=' mb-2 font-semibold mt-4'>Company Name</h1>
    <input className=' border border-gray-500 rounded-md w-4/5 p-2  pr-5' type="text" name="" value=""/>
</div>
<div className='ml-16'>
    <h1 className=' mb-2 font-semibold mt-4'>Country</h1>
    <input className=' border border-gray-500 rounded-md w-4/5 p-2  pr-5' type="text" name="" value=""/>
</div>
<div className='ml-16'>
    <h1 className=' mb-2 font-semibold mt-4'>Address</h1>
    <input className=' border border-gray-500 rounded-md w-4/5 p-2  pr-5' type="text" name="" value=""/>
</div>
<div className='ml-16'>
    <h1 className=' mb-2 font-semibold mt-4'>City</h1>
    <input className=' border border-gray-500 rounded-md w-4/5 p-2  pr-5' type="text" name="" value=""/>
</div>
<div className='ml-16'>
    <h1 className='ml-5 mb-2 font-semibold  mt-4'>Zip</h1>
    <input className=' border border-gray-500 rounded-md w-4/5 p-2  pr-5' type="text" name="" value=""/>
</div>
        </div>
    );
};

export default Checkout;