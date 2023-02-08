import React from 'react'
import "./about.scss"

const About = () => {
  return (
    <div className='about'>
        <h2 className="title">About Me</h2>
        <p className='detail'>Now that you have seen my work and what I can do, you can reach out to me for a project or just to say hello using the links below to send me an email or message through social media. You can also download my CV in PDF if you need it.</p>
       <div className="box">
       <button className="btn btn--download">Download my CV</button>
       </div>
    </div>
  )
}

export default About