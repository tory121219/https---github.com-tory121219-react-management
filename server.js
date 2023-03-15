const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
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
  ]);
});
app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
