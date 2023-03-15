import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default App;
