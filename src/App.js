import React, { Component } from 'react';
import windmill from './assets/windmill.png';
import windmillSpin from './assets/windmill-spiner.png';
import Page1 from './Page1/PageOne.js';
import Page2 from './Page2/PageTwo.js';
import Pagination from './Pagination.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onPage: 1,
      onTypingAnimation: true,
      showErrows: true,
      sunPositionLeft: 1,
      sunPositionTop: 1,
      cloudePositionTop: 69,
      cloudePositionRight: 4
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.onPage !== nextState.onPage) {
      return true;
    }
    if (this.state.sunPositionLeft !== nextState.sunPositionLeft) {
      return true;
    }
    if (this.state.showErrows !== nextState.showErrows) {
      return true;
    }
    if (this.state.onTypingAnimation !== nextState.onTypingAnimation) {
      return true;
    }
    return false;
  }

  componentDidMount() {
  }


  flipPage = (direction) => {
    this.setState({ onTypingAnimation: false })
    if (direction === "next" && this.state.onPage !== 3) {
      this.setState({ onPage: this.state.onPage + 1 })
    }
    if (direction === "prev" && this.state.onPage !== 1) {
      this.setState({ onPage: this.state.onPage - 1 })
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.onPage === 1
              ? <Page1
                onTypingMode={this.state.onTypingAnimation} />
              : ""
          }
          {
            this.state.onPage === 2
              ? <Page2 />
              : ""
          }
          <Pagination
            page={this.state.onPage}
            flipPage={this.flipPage}
            showErrows={this.state.showErrows} />


        </header>
      </div>
    );
  }
}


export default App;

