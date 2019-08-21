// axios - 데이터 요청 라이브러리 

import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  render() {
    function f1() {
      console.log('f1');

      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.title);
      }).catch((e) => {console.log('test', e);
      })
    }

    // f1과 같음
    async function f2() {
      console.log('f2');
      // res가 데이터 받음 (위의 response 와 같음)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1').catch((e) => {console.log('hungry', e);
      })
      console.log(res.data);
      console.log(res.data.title);
    }


    // 비동기 함수를 동기화 함
    async function f3 () {
      console.log('f3');
      // res가 데이터 받음 (위의 response 와 같음)
      const res1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      const res2 = await axios.get('https://jsonplaceholder.typicode.com/posts/2')

      console.log(res1.data);
      console.log(res1.data.title);
      
      console.log(res2.data);
      console.log(res2.data.title);
      }




    return (
      <div>
        <button onClick={f1}>버튼1</button>
        <button onClick={f2}>버튼2</button>
        <button onClick={f3}>버튼3</button>
      </div>
    );
  }
}

export default App;