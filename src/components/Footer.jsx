import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { CiLinkedin } from "react-icons/ci";
import {Link as RouterLink} from "react-router-dom"

function Footer() {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
                <h3 className='text-2xl text-gray-200 font-semibold'>C.S Siriwardhane</h3>
                <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                        <a href="https://github.com/heittre"> <FaGithubSquare/></a>
                        <a href="https://www.linkedin.com/in/chamudi-siriwardhane/"> <CiLinkedin /></a>
                       
                </div>
        </div>

       
      <div className='flex flex-col text-gray-400'>
        <div>Email : chamudisiriwardena@gmail.com</div>
        <div>Mobile :+94 70 2191756</div>
        <p className='text-gray-400'> @2026 C.S Siriwardhane  </p>
       
      </div>
    </div>
  )
}

export default Footer