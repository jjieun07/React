import React, { Component } from 'react';

class App extends Component {
  state = {
    num : 10,
  }

  // 에로우 함수에서 사용할 때는 자동으로 바인딩
  f1 = () => {
    console.log('f1');
    console.log(this.state.num);    
  }

  // 객체 내부의 변수를 쓰기 위해서는 함수를 바인딩 시켜줘야함 (ES6이전 문법)

  // f2 = function() {  // 에러
  //   console.log('f2');
  //   console.log(this.state.num);    
  // }
  
  //binding
  constructor() {
    super()
    this.f2 = this.f2.bind(this)  
  }
  f2 = function() {
    console.log('f2');
    console.log(this.state.num);    
  }

  // 안됨
  // let a = 10?
    a = 10
  render() {
    //함수 내에서는 에로우 함수 사용 불가
    // f3 = () => { }

    // 안됨
    // b = 10
    
    let b = 10
    function f3() {
      console.log("f3");
    }
    return (
      <div>
        <button onClick={this.f1}>f1</button>
        <button onClick={this.f2}>f2</button>
        <button onClick={f3}>f3</button>
      </div>
    );
  }
}

export default App;