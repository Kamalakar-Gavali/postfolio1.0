import React from 'react'

const Project = ({id, name, url,codeUrl, skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project" >
                <div 
                className={`img-pro ${id}`} 
                
                style={{backgroundImage:'https://images.pexels.com/photos/3799821/pexels-photo-3799821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}>

                </div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            <a title={codeUrl} className="project-name" rel="noopener noreferrer" target="_blank" href={codeUrl}><h3>Code</h3></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
        </div>
    )
}

export default Project
