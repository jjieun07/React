
import React, { Component } from 'react';

class App extends Component {
  data = ['호랑이', '코끼리', "앵무새"]
  state = {
    nowAni:"",
  }

  f1 = () => {
    this.n = parseInt(Math.random() * 3)
    this.nowAni = this.data[this.n];
    this.setState({
      nowAni:this.data[this.n],
    })
  }

  render() {
    return (
      // parent={this}
      <div>
        <Bpp ani = {this.state.nowAni} f1 = {this.f1}></Bpp>
      </div>
    );
  }
}

class Bpp extends Component {
  render() {
    return (
      <div>
        {/* <h1>{this.props.parent.nowAni}</h1> */}
        <h1>{this.props.ani}</h1>
        <button onClick={this.props.f1}>버튼</button>
      </div>
    );
  }
}

export default App;