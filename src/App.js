import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: '961222',
    gender: '남자',
    job: '대학생',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '김길동',
    birthday: '000207',
    gender: '남자',
    job: '회사원',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '최길동',
    birthday: '820330',
    gender: '여자',
    job: '주부',
  },
];
class App extends Component {
  render() {
    return (
      <div>
        {customers.map((info) => {
          return (
            <Customer
              key={info.id}
              id={info.id}
              image={info.image}
              name={info.name}
              birthday={info.birthday}
              gender={info.gender}
              job={info.job}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
