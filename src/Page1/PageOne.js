import React, { Component } from 'react';
import AnimatedTitleAndSubtitleBlock from './AnimatedTitleAndSubtitleBlock.js';
import AnimatedTyping from './AnimatedTyping'
import './Page1.css';

class Page1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      texts: [
        {
          text: ["Hi"],
          class: "hi"
        },
        {
          text: ["I`m Amir Metsu"],
          class: "mainTitle"
        },
        {
          text: ["3D Artist, Animator"],
          class: "amir-subtitle"
        },
        {
          text: ["I can animate , create assets, model, sculpt and paint characters."],
          class: "amir-description"
        },
        {
          text: ["I can also manage projects and create all kinds of 3D contant according to costumer's need"],
          class: "amir-description"
        }
      ],
      onTyping: 0,
      onTypingMode: this.props.onTypingMode
    };
  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.state.onTyping !== nextState.onTyping) {
      return true;
    }
    if (this.porps.onTypingMode !== nextProps.onTypingMode) {
      return true;
    }
    return false;
  }

  componentDidMount() {
  }

  onDoneParagraphTyping = () => {
    if (this.state.texts.length <= this.state.onTyping) {
      this.setState({ onTypingMode: false })
    } else {
      this.setState({ onTyping: this.state.onTyping + 1 })
    }
  }

  render() {
    return (
      <div className="page1">
        <div className="opening-text">
          <div className="textBlock">
            {
              (this.state.texts.map((textblock, index) =>
                this.props.onTypingMode
                  ? <AnimatedTyping
                    className={textblock.class}
                    text={textblock.text}
                    speed={100}
                    startTyping={this.state.onTyping === index}
                    doneTyping={() => this.onDoneParagraphTyping()}
                  />
                  : <div className={textblock.class}>{textblock.text}</div>
              ))
            }
          </div>
        </div>

        {window.innerWidth > 800
          ? <iframe src="https://player.vimeo.com/video/235837646?autoplay=1&loop=1&controls=0&muted=1" width="800" height="500" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ></iframe>
          : <iframe src="https://player.vimeo.com/video/235837646?autoplay=1&loop=1&controls=0&muted=1" width="auto" height="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen ></iframe>
        }
      </div>
    );
  }
}


export default Page1;




// {
//   text1: ["I`m Amir Metsu"],
//   class1: "mainTitle",
//   text2: ["3D Artist, Animator"],
//   class2: "subTitle",
//   text3: ["I can animate , create assets, model, sculpt and paint characters. I can also manage projects and create all kinds of 3D contant according to costumer's need"]
// },
// {
//   text1: ["I can animate , create assets, model, sculpt and paint characters. I can also manage projects and create all kinds of 3D contant according to costumer's need"],
//   class1: "subTitle",
//   text2: ["3D Artist", "Animator", "Project Manager", "And a 3D Gerenalist"],
//   class2: "arrayTitles"
// },
// {
//   text1: ["I mainly use: Autodesk Maya, Zbrush, PhotoShop, Plotaverse, Premiere"],
//   class1: "subTitle",
//   text2: ["And somtimes I also use: substance painter, After Effect, Lightwave, 3DS Max and more... "],
//   class2: "subTitle"
// }