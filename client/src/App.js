import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

class App extends Component {
  state = {
    customers: '',
  };
  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };

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
            {this.state.customers
              ? this.state.customers.map((info) => {
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
                })
              : ''}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default App;
