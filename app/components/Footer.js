import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'
const Footer = () => {
  return (
    <div className='bg-[#0c0303]  flex justify-between items-center py-4 px-5'>
      <p className='text-yellow-300 font-bold' style={{fontFamily:"'Roboto', sans-serif"}}>Copyright &copy; Dipen Kalsi , 2023. All rights reserved.</p>
      <div className='text-yellow-300 flex space-x-6'>
        <a href="https://github.com/dipenkalsi" target="_blank" rel="noopener noreferrer">
          <BsGithub size="25px"/>
        </a>
        <a href="https://www.linkedin.com/in/dipen-kalsi-4448b5205/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin size="25px"/>
        </a>
        <a href="https://www.instagram.com/_dipen02/" target="_blank" rel="noopener noreferrer">
          <BsInstagram size="25px"/>
        </a>
        <a href="https://twitter.com/DipenKalsi" target="_blank" rel="noopener noreferrer">
          <BsTwitter size="25px"/>
        </a>
        <a href="https://stackoverflow.com/users/20255900/dipen-kalsi" target="_blank" rel="noopener noreferrer">
          <BsStackOverflow size="25px"/>
        </a>
        <a href="https://leetcode.com/kalsidipen/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode size="25px"/>
        </a>
        <a href="https://auth.geeksforgeeks.org/user/kalsidipen/" target="_blank" rel="noopener noreferrer">
          <SiGeeksforgeeks size="25px"/>
        </a>
        <a href="https://profile.codingninjas.com/d3fc1db6-c409-444a-9937-2d7abb45b134?_ga=2.92714142.2096200887.1674460594-1706124443.1671374508" target="_blank" rel="noopener noreferrer">
          <SiCodingninjas size="25px"/>
        </a>
      </div>
    </div>
    
  )
}

export default Footer
