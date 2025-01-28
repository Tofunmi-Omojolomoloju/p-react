import React from 'react'

function Footer({title, link}) {
   return (
    <div> 
      <nav className='bg-[#111111] h-22 text-white text-2xl flex justify-center items-center gap-5 py-10'>
         <ul className="w-max flex items-center gap-7">
            {link.map((link, index) => (
               <li key={index}>{link}</li>
            ))}
         </ul>
      </nav>
      <div className="bg-black text-[#FFFFFF] h-10 flex justify-center items-center">
        {title}
      </div>
    </div>
  )
}

export default Footer