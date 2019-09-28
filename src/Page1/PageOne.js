import React, {Component} from 'react';
import AnimatedTitleAndSubtitleBlock from './AnimatedTitleAndSubtitleBlock.js';
import './Page1.css';

class Page1 extends Component {
  constructor(props){
    super(props)
     this.state = {
       texts: [
        {
          text1: ["I`m Amir Metsu"], 
          class1: "mainTitle", 
          text2: ["3D Artist, Animator"], 
          class2: "subTitle",
          text3:["I can animate , create assets, model, sculpt and paint characters. I can also manage projects and create all kinds of 3D contant according to costumer's need"]
        },
        {
          text1: ["I can animate , create assets, model, sculpt and paint characters. I can also manage projects and create all kinds of 3D contant according to costumer's need"], 
          class1: "subTitle", 
          text2: ["3D Artist", "Animator", "Project Manager", "And a 3D Gerenalist"], 
          class2:"arrayTitles"
        },
        {
          text1: ["I mainly use: Autodesk Maya, Zbrush, PhotoShop, Plotaverse, Premiere"        ], 
          class1: "subTitle", 
          text2: ["And somtimes I also use: substance painter, After Effect, Lightwave, 3DS Max and more... "], 
          class2:"subTitle"
        }
       ],
       paragraphIndex: 0,
       onTypingMode: this.props.onTypingAnimation
     };
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.paragraphIndex !== nextState.paragraphIndex){
      return true;
    }
    if(this.state.onTypingMode !== nextState.onTypingMode ||
      this.props.onTypingAnimation !== nextProps.onTypingAnimation){
      return true;
    }
    return false;
  }

  componentDidMount(){
  }

  onDoneParagraphTyping = () => {
    if(this.state.texts.length - 1 > this.state.paragraphIndex){
      setTimeout( () => this.setState({paragraphIndex: this.state.paragraphIndex + 1}), 2000 )
    } else {
      this.setState({onTypingMode: false})
    }
  }

  render(){
  return (
      <div className="page1">
      { this.state.onTypingMode 
        ? <div className="opening-text">
            <div className="textBlock">
              <AnimatedTitleAndSubtitleBlock
                firstTextClassName={this.state.texts[this.state.paragraphIndex].class1}
                secondTextClassName={this.state.texts[this.state.paragraphIndex].class2}
                text1={this.state.texts[this.state.paragraphIndex].text1}
                text2={this.state.texts[this.state.paragraphIndex].text2}
                text3={this.state.texts[this.state.paragraphIndex].text3}
                speed1={100}
                speed2={100}
                doneTyping={this.onDoneParagraphTyping}
                clearTyping={this.state.clearTyping}
              />
            </div> 
          </div>
        : <div className="static-paragraph">
            <h1 className="noga">{this.state.texts[0].text1}</h1>
            <p className="noga-subTitle">{this.state.texts[0].text2}</p>
            <p className="noga-description"><b>Frontend technologies: </b> VueJS, React, Redux,  Javascript,  HTML5, CSS, Sass, JQuery, Wordpress, Twig </p>
            <p className="noga-description"><b>Backend technologies: </b> PHP, Idiorm,  MySQL, Mongo, node.js </p>
            <p className="noga-description"><b>Development tools: </b> vim,  VScode, git, centos 7</p>
          </div>
      }
   <iframe src="https://player.vimeo.com/video/235837646" width="800" height="540" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
  );
  }
}


export default Page1;

