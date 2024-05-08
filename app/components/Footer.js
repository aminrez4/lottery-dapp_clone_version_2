import React from 'react'
import {BsStackOverflow} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='bg-[#0c0303]  flex justify-between items-center py-4 px-5'>
      <p className='text-red-600 font-bold' style={{fontFamily:"'Roboto', sans-serif"}}>Copyright &copy; Buzz Raffle , 2024. All rights reserved.</p>
      <div className='text-red-600 flex space-x-6'>
    
        <a href="https://twitter.com/DipenKalsi" target="_blank" rel="noopener noreferrer">
          <BsTwitter size="25px"/>
        </a>
        <a href="https://stackoverflow.com/users/20255900/dipen-kalsi" target="_blank" rel="noopener noreferrer">
          <BsTelegram size="25px"/>
        </a>
        <a href="https://leetcode.com/kalsidipen/" target="_blank" rel="noopener noreferrer">
          <TbWorld size="25px"/>
        </a>
       
      </div>
    </div>
    
  )
}

export default Footer
