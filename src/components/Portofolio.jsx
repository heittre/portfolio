import React from 'react'
import project1 from '../assets/project_1.png'
import { FaGithubSquare } from "react-icons/fa";
import Reveal from '../components/Reveal'

const projects = [
    {
        img:project1,
        title:"StayMate",
        description:"A Job Portal where job seekers can find jobs, recruiters can list their jobs",
        technologies:["HTML", "CSS", "Javascript", "PHP "],
        links:{
            site:"#",
            github:"#",
        },
    },
    {
        img:project1,
        title:"JobLinkUp",
        description:"A Job Portal where job seekers can find jobs, recruiters can list their jobs",
        technologies:["HTML", "CSS", "Javascript", "PHP "],
        links:{
            site:"#",
            github:"#",
        },
    },
    
    {
        img:project1,
        title:"Java Library Management System",
        description:"A Job Portal where job seekers can find jobs, recruiters can list their jobs",
        technologies:["HTML", "CSS", "Javascript", "PHP "],
        links:{
            site:"#",
            github:"#",
        },
    }
]

const Portofolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portofolio">
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portofolio</h2>
            {projects.map((project, index)=>(
                <Reveal>
                <div key={index} 
                className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse': ''} mb-12`}>
                            <div className='w-full md:w-1/2 p-4'>
                                <img src={project.img} 
                                alt={project.title}
                                className='w-full h-full object-cover rounded-lg shadow-lg' />
                                
                            </div>

                            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                                <h3 className='text-2xl font-semibold text-gray-200 mb-4' > {project.title}</h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className='flex space-x-4'>
                                        <a href={project.links.site}
                                        className='px-4 py-2 mb-4 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                        >View Site</a>
                                        <a href={project.links.github} className='items-center'><FaGithubSquare className='text-purple-300'/>

                                        </a>
                                </div>
                                <div className='flex flex-col md:flex-row gap-1'>
                                <h4 className='text-white font-bold pr-2'>Technologies</h4>
                                <ul className='flex flex-col md:flex-row items-center gap-3'>
                                {project.technologies.map((technology, techIndex) => (
                                <li key={techIndex} className='text-gray-300'>{technology}</li>
                            ))}
                                   
                                </ul>
                                </div>
                            </div>
                </div>
                </Reveal>
            ))}
    </div>
  )
}

export default Portofolio