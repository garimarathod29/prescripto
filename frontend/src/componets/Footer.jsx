import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      {/*------left section---------*/}
      <div>
          <img className='mb-5 w-40'src={assets.logo} alt=''/>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure nobis cum ipsum, ad veritatis, nemo odio excepturi consequatur illum, tempore accusantium sit velit distinctio laboriosam sed. Veritatis, aspernatur recusandae!</p>
      </div>

      {/*------center section---------*/}
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
        <li>Home</li>
        <li>About us</li>
        <li>contact us</li>
        <li>privacy policy</li>
        </ul>
      </div>

      {/*------Right section---------*/}
      <div>
        <p className='text-xl font-medium mb-5'>Get In TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600' >
        <li>8815937569</li>
        <li>garimarathod@gmail.com</li>
        </ul>
      </div>
      </div>
    
       {/*------copy right---- */}

      <div className='py-5 text-sm text-center'>
           <hr/>
           <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </div>
    
  )
}

export default Footer
