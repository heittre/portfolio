import React from 'react'
import {motion} from 'framer-motion'
import aieseclogo from '../assets/aiesec_logo.png'
import Reveal from './Reveal'

const experiences = [
    {
        company : 'AIESEC Sri Lanka Dev Team',
        period : '2024 August - Present',
        position:'Software Engineer',
        description : 'Engaged in developing activities for AIESEC Sri Lanka Dev Team',
        logo : aieseclogo
    }
]


function Experience() {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
            <motion.div
                className = 'space-y-8'
                initial = "hidden"
                animate = "visible"
            >
                {experiences.map((experience, index) => (
                    <Reveal>
                    <motion.div
                        key = {index}
                        initial = "hidden"
                        whileInView="visible"
                        viewport={{once : false, amount : 0.3}}
                        transition={{duration : 1}}
                        className=' border border-purple-600 p-6 rounded-lg shadow-md
                        hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                    >
                        <div className='flex justify-between'>
                        <h2 className='text-gray-100 text-2xl font-semifold'>{experience.company}</h2>
                        <img src={experience.logo} alt="aiesec logo" className='h-[41px] w-[200px]'/>
                        </div>
                       
                        <p className='text-gray-300'>{experience.period}</p>
                        <p className='text-gray-500'>{experience.position}</p>
                        <p className='text-gray-400 mt-4'>{experience.description}</p>
                    </motion.div>
                    </Reveal>
                ) )}
            </motion.div>

    </div>
  )
}

export default Experience