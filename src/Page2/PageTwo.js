import React, {Component} from 'react';
import './Page2.css';
import Paragraph from './Paragraph.js'

class Page2 extends Component {
  constructor(props){
    super(props)
     this.state = {
     };
  }

  componentDidMount(){
  }


  render(){
  return (
      <div className="page2">
        <div className="row">
          <h2 className="main-titles">Professional Experience</h2>
          <Paragraph
            company="Photuro3D"
            title="Technical Animator, 3D Generalist"
            date="2018 - Now, Tel Aviv"
            description="Wide skills in 3D modeling, sculpting and texturing for 3D printing (ZBrush)
            Animating 3D human models
            Creating automation pipelines for Rig and retargeting animation (Maya)
            Operating Motion Capture Sensor Suit, forming a motion capture animation library
            Full control and understanding of Photuro3D scanning technology. (Mantis Vision)
            Working with customers to create animation and design according to customer needs
            Created Equirectangular Dynamic Backgrounds (Photoshop, Plotaverse)
            Working with the marketing team to brand wallpaper using Photoshop"/>

            <div className="brake"></div>

          <h2 className="main-titles">Volunteering</h2>
          <Paragraph
            company="Animation Union Israel"
            title="Student Representor"
            date="2017 - 2019"
            description="Mentoring Project - Mentoring Students as part of Israel Animation Industry’s
            Israel Animation Industry’s “Employment Fair” at the Anination Festival
            Producing “The Real World” lecture
            "/>
<div className="brake"></div>
<h2 className="main-titles">Education</h2>
          <Paragraph
            company="Nexttut Education"
            title="Character Creation curse"
            date="2019"
            description=""/>
          <Paragraph
            company="Wonder ArtHouse"
            title="Texture Extreme Course"
            date="2018"
            description=""/>
          <Paragraph
            company="IAC (Israel.Animation.College)"
            title="3D Animation"
            date="2015 - 2017"
            description=""/>
        
        </div>

        <div className="row">


        <h2 className="main-titles">Military service</h2>
          <Paragraph
            company="I.D.F 'Nahal' division"
            title="Fighter, radio technician"
            date="2011 - 2014"
            description=""/>
          <Paragraph
            company="Youth Movement “Ha’noar ha’oved veha’lomed”"
            title="Year of Service"
            date="2010 - 2011"
            description=""/>
<div className="brake"></div>
<h2 className="main-titles">Languages</h2>
      <div className="paragraph">
        <h3 className="paragraph-title">Hebrew - </h3>
        <p className="paragraph-description">native language</p>
      </div>

      <div className="paragraph">
        <h3 className="paragraph-title">English - </h3>
        <p className="paragraph-description">fluent</p>
      </div>

<div className="brake"></div>

<h2 className="main-titles">Hobbies</h2>
<div className="paragraph">
        <p className="paragraph-description">Studying Animation, Playing guitar, Cooking, Training, Gaming and Writing</p>
      </div>
         
        </div>
      </div>
  );
  }
}


export default Page2;

