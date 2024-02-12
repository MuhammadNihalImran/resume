import React from 'react'
import {Envelope,TelephoneFill,GeoAltFill, Linkedin,Github} from 'react-bootstrap-icons';

const Left = () => {
  return (
    <div className='left'>
      <div className='Intro'>
        <h1>Muhammad Nihal Sheikh</h1>
        <h4>Web Developer</h4>
        <p><Envelope/>narutouzo248624@gmail.com</p>
        <p><TelephoneFill/>+92 345-3033270</p>
        <p><GeoAltFill/>Azam Nagar Liaquatabad Karachi</p>
        <p><Linkedin/><a href="https://www.linkedin.com/in/muhammad-nihal-sheikh-bb15b828a/">linkedinS</a></p>
        <p><Github/><a href="https://github.com/MuhammadNihalImran">github</a></p>
        </div>
        

        <div className='edu'>
        <h1>Education</h1>
        <h4>Intermediate</h4>
        <ul><li>Govet College For Men Naizamabad Karachi </li></ul>
    
        <h4>Degree</h4>
        <ul><li> Software Enginnering from Ned Univercity</li></ul>
        </div>

        <div className='skill'>
          <h1>Skills</h1>
           <ul>
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>react.js</li>
            <li>Node.js</li>
            <li>Bootstrape</li>
           </ul>
        </div>
        
   </div>
  )
}

export default Left