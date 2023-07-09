import React from 'react'
import { useState } from 'react';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiJavascript, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";
import { FaReact } from "react-icons/fa";
const Header = () => {

  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const handleEmailCopy = () => {
    const emailText = 'joshizbeast101@gmail.com';
    navigator.clipboard.writeText(emailText);
    setEmailCopied(true)
    setTimeout(() => {
      setEmailCopied(false);
    }, 1000);
  }
  const handlePhoneCopy = () => {
    const phoneText = '(713)-501-0734';
    navigator.clipboard.writeText(phoneText);
    setPhoneCopied(true)
    setTimeout(() => {
      setPhoneCopied(false);
    }, 1000);
  }

  return (
    <div className='w-full h-screen text-white grid place-items-center z-10'>
      <div className='flex flex-col items-center backdrop-blur-sm py-10'>
        <h1 className='font-bold w-[20rem] md:w-[40rem] lg:w-[50rem] text-3xl md:text-[3rem] lg:text-[3rem] md:leading-none lg:leading-none text-center font-Roboto p-12'>
          Welcome I'm Josh a Web Devloper
        </h1>
        {/* Skills */}
        <div className='flex items-center justify-center flex-wrap gap-2 mb-10'>
          <h2 className='font-bold text-xl'>Skills:</h2>
          <div className='flex flex-col items-center justify-center'>
            <ImHtmlFive className='text-[#e44d26] w-[2rem] h-[2rem]' />
            <p className='font-bold text-[#e44d26]'>HTML</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <SiCss3 className='text-[#1671b4] w-[2rem] h-[2rem]' />
            <p className='font-bold text-[#1671b4]'>CSS</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <SiJavascript className='text-[#f3e11d] w-[2rem] h-[2rem]' />
            <p className='font-bold text-[#f3e11d]'>JavaScript</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <SiTailwindcss className='text-[#07b6d5] w-[2rem] h-[2rem]' />
            <p className='font-bold text-[#07b6d5]'>TailwindCSS</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <FaReact className='text-[#02d4fd] w-[2rem] h-[2rem]' />
            <p className='font-bold text-[#02d4fd]'>React</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <SiGit className='text-[#f44c28] w-[2rem] h-[2rem]' />
            <p className='font-bold text-[#f44c28]'>Git</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <SiGithub className='text-[#ffffff] w-[2rem] h-[2rem]' />
            <p className='font-bold text-[#ffffff]'>GitHub</p>
          </div>
        </div>
        {/* Socials */}
        <div className='flex gap-2 items-center justify-center flex-wrap px-10'>
          <h2 className="font-bold text-xl">Contact:</h2>
          <div className='flex flex-col gap-3'>
            <p className='cursor-pointer text-[lime] font-semibold'>Github: <a href='https://github.com/Josh88x' target="_blank" className='ml-2 text-[#00f2ff]'>https://github.com/Josh88x</a></p>
            <div className='relative'>
              <p onClick={handleEmailCopy} className='flex cursor-pointer text-[lime] font-semibold'>Email: <p  className='ml-2 text-[#00f2ff]'>joshizbeast101@gmail.com</p></p>
              {emailCopied && <p className='absolute fade-in-out top-[0px] left-[250px] italic tracking-wider text-[#00f2ff]'>Copied</p>}
            </div>
            {/* Phone */}
            <div className="relative">
              <p onClick={handlePhoneCopy} className='flex cursor-pointer text-[lime] font-semibold'>Phone-Number: <p className='ml-2 text-[#00f2ff]'>(713)-501-0734</p></p>
              {phoneCopied && <p className='absolute fade-in-out top-[0px] left-[250px] italic tracking-wider text-[#00f2ff]'>Copied</p>}
            </div>
            <p className='cursor-pointer text-[lime] font-semibold'>LinkedIn: <a href='https://www.linkedin.com/in/joshua-dickens-40031a204/' target="_blank" className='ml-2 text-[#00f2ff]'>www.linkedin.com/in/joshua-dickens-40031a204</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header