import React from 'react'
import screenshot1 from '../imgs/PhotographyWebsiteScreenshot.png';
import screenshot2 from '../imgs/MasterKeysScreenshot.png';
import screenshot3 from '../imgs/ReactTodoListScreenshot.png';
import screenshot4 from '../imgs/VanillaTodoListScreenshot.png';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiJavascript, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import About from './About';

const Projects = () => {
  return (
    <div className='w-full h-screen grid place-items-center z-20 text-[#000000] greenbg'>
      <div className='w-[75%]  lg:flex-row lg:flex-wrap flex flex-col gap-4 items-center justify-center py-10 
      bg-gradient-to-br from-[rgba(0,255,153,0.47)] to-[rgba(26,255,0,0.31)] backdrop-blur-sm'>
        <About/>
        <h2 className='text-[2.3rem] font-medium tracking-wide'>Projects</h2>
        {/* Photography Website */}
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <img className=' px-5 object-cover' src={screenshot1} alt="screenshot" />
          <span className="flex justify-center items-center gap-4 mt-5">
            <FaReact className='text-[#02d4fd] w-[2rem] h-[2rem]'/>
            <SiTailwindcss className='text-[#07b6d5] w-[2rem] h-[2rem]'/>
          </span>
          <a className='text-xl font-bold md:text-2xl lg:text-3xl mb-5' href="https://josh88x.github.io/Photography-Website/" target="_blank">Photography Website</a>
        </div>
        {/* MasterKeys Website */}
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <img className=' px-5 object-cover' src={screenshot2} alt="screenshot" />
          <span className="flex justify-center items-center gap-4 mt-5">
            <FaReact className='text-[#02d4fd] w-[2rem] h-[2rem]'/>
            <SiTailwindcss className='text-[#07b6d5] w-[2rem] h-[2rem]'/>
          </span>
          <a className='text-xl font-bold md:text-2xl lg:text-3xl mb-5' href="https://josh88x.github.io/Master-Keys/" target="_blank">Master Keys Piano Website</a>
        </div>
        {/* React Todo List Website */}
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <img className=' px-5 object-cover' src={screenshot3} alt="screenshot" />
          <span className="flex justify-center items-center gap-4 mt-5">
            <FaReact className='text-[#02d4fd] w-[2rem] h-[2rem]'/>
            <SiTailwindcss className='text-[#07b6d5] w-[2rem] h-[2rem]'/>
          </span>
          <a className='text-xl font-bold md:text-2xl lg:text-3xl mb-5' href="https://josh88x.github.io/Todo-List-React/" target="_blank">React TodoList</a>
        </div>
        {/* Vanilla Todo List Website */}
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <img className=' px-5 object-cover' src={screenshot4} alt="screenshot" />
          <span className="flex justify-center items-center gap-4 mt-5">
            <ImHtmlFive className='text-[#e44d26] w-[2rem] h-[2rem]'/>
            <SiCss3 className='text-[#1671b4] w-[2rem] h-[2rem]'/>
            <SiJavascript className='text-[#f3e11d] w-[2rem] h-[2rem]'/>
          </span>
          <a className='text-xl font-bold md:text-2xl lg:text-3xl mb-5' href="https://josh88x.github.io/Todo-List/" target="_blank">Vanilla TodoList</a>
        </div>   
      </div>
    </div>
  )
}

export default Projects