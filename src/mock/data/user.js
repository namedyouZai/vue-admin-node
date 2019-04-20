import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: '孙艺晖',
    password: '123456',
    schoolName: '合肥工業大學',
    name: '孙艺晖'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
