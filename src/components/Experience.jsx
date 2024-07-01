import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { styles } from '../styles'
import 'react-vertical-timeline-component/style.min.css'
import {experiences} from '../constants'



const ExperienceCard = ({experience})=>{
  return(
  <VerticalTimelineElement contentStyle={{background: '#0e0c1b', color:'#fff'}} 
                           contentArrowStyle={{borderRight: '7px solid #7e22ce'}}
                           date={experience.date}
                           iconStyle={{background: experience.iconBg}}
                           icon={
                              <div className='flex justify-center items-center w-full h-full'>
                                <img src={experience.icon} 
                                     alt={experience.company_name} 
                                     className=' object-contain'
                                />
                              </div>
                            }
                          >
    <div>
      <h3 className='text-violet-300 text-[24px] font-bold '>{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point,index)=>
          <li key={`experience-point-${index}`} className='text-secondary text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
      )}
    </ul>
  </VerticalTimelineElement>
)}


const Experience = () => {
  return (
    <div>
    
    <h2 className={styles.sectionHeadText}>Work Experience</h2>
    <div className='mt-5 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience,ind)=>
          <ExperienceCard key={ind} experience={experience}/>
        )}

      </VerticalTimeline>


    </div>


    </div>

  )
}

export default Experience