import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import Reveal from './Reveal'


const skills = [
    {
        category:'Frontend',
        technologies:[
            {name:'HTML', icon:<FaHtml5 className='text-orange-600' /> },
            {name:'CSS', icon:<FaHtml5 className='text-orange-600' /> },
            {name:'Javascript', icon:<FaHtml5 className='text-orange-600' /> },

        ]
    },

    {
        category:'Backend',
        technologies:[
            {name:'PHP', icon:<FaHtml5 className='text-orange-600' /> },
            {name:'NodeJS', icon:<FaHtml5 className='text-orange-600' /> },
            {name:'ExpressJS', icon:<FaHtml5 className='text-orange-600' /> },

        ]
    },
    {
        category:'Database',
        technologies:[
            {name:'MongoDB', icon:<FaHtml5 className='text-orange-600' /> },
            {name:'MySQL', icon:<FaHtml5 className='text-orange-600' /> },

        ]
    },
    {
        category:'Testing Tools',
        technologies:[
            {name:'Postman', icon:<FaHtml5 className='text-orange-600' /> },
            {name:'Insomnia', icon:<FaHtml5 className='text-orange-600' /> },

        ]
    }
]


const Skills = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex flex-col  justify-center px-4 text-gray-200 pb-8 md:my-12'
    id='skills'>
        <Reveal>
        <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>
        <p className='text-center mb-8'>Check Out my projects <a href="" className='underline'>here</a> </p>

        <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 '>
                {skills.map((skill, index) => (
                    <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full
                    md:w-1/2"
                    >
                            <h3 className='text-xl font-bold mb-4 text-center'>{skill.category}</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                {skill.technologies.map((tech, idx) => (
                            <div key={idx} className='flex items-center space-x-2'>
                                        <span className='text-2xl'>{tech.icon}</span>
                                        <span>{tech.name}</span>
                            </div>
                                ))}
                            </div>
                    </div>
                ))}
        </div>
        </Reveal>
    </div>


  )
}

export default Skills