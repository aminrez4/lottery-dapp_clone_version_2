import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsStackOverflow} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si'
const Footer = () => {
  return (
    <div className='bg-[#0c0303]  flex justify-between items-center py-4 px-5'>
      <p className='text-yellow-300 font-bold' style={{fontFamily:"'Roboto', sans-serif"}}>Copyright &copy; Dipen Kalsi , 2023. All rights reserved.</p>
      <div className='text-yellow-300 flex space-x-6'>
        <a href="https://github.com/dipenkalsi" target="_blank" rel='norefferer'>
          <BsGithub size="25px"/>
        </a>
        <a href="https://www.linkedin.com/in/dipen-kalsi-4448b5205/" target="_blank" rel='norefferer'>
          <BsLinkedin size="25px"/>
        </a>
        <a href="https://www.instagram.com/_dipen02/" target="_blank" rel='norefferer'>
          <BsInstagram size="25px"/>
        </a>
        <a href="https://twitter.com/DipenKalsi" target="_blank" rel='norefferer'>
          <BsTwitter size="25px"/>
        </a>
        <a href="https://stackoverflow.com/users/20255900/dipen-kalsi" target="_blank" rel='norefferer'>
          <BsStackOverflow size="25px"/>
        </a>
        <a href="https://leetcode.com/kalsidipen/" target="_blank" rel='norefferer'>
          <SiLeetcode size="25px"/>
        </a>
      </div>
    </div>
    
  )
}

export default Footer
