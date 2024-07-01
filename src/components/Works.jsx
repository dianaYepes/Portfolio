import React from 'react'
import {styles} from '../styles'
import {projects} from '../constants'


const Card = ({project}) =>{

  return(
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={project.image}></img>
        </div>
        <div className="card-info-wrapper">
       
            <div className="card-info-title">
              <h3 className='text-white'>{project.name}</h3>  
              <h4 className='text-secondary'>{project.description}</h4>
              <div className='mt-4 flex flex-wrap gap-2'>
                {project.tags.map((tag)=>
                  <p className={`text-[14px] text-opacity-80 text-secondary`} key={tag.name}>#{tag.name}</p>
                )}
              </div>
              <div className='mt-2'>
              <a href={project.source_code_link} className="text-xs underline text-amber-100 break-words break-all text-opacity-60 hover:text-opacity-90">Link to github/article</a>
            </div>   
          </div>
        </div>
      </div>
    </div>


  )
}





const Works = () => {

  return (
    <div>

      <h2 className={styles.sectionHeadText}>Personal Projects</h2>
      <div id='cards' >
        {projects.map((project,index)=>
          <div key={index}>
            <Card project={project}></Card>
          </div>
          
        )}
      </div>
      
    </div>
  )
}

export default Works

