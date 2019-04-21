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

const Users = [
  {"name":"合肥新站区新型显示产业集聚发展基地","outputValue":"506.71 ","outputGrowth":"11.50 ","textRevenue":"27.60 ","textRevenueGrowth":"1.09 ","fixedAssets":"250.53 ","fixedAssetsGrowth":"7.40 "},
  {"name":"合肥高新区集成电路产业集聚发展基地","outputValue":"202.50 ","outputGrowth":"19.00 ","textRevenue":"18.02 ","textRevenueGrowth":"26.00 ","fixedAssets":"63.50 ","fixedAssetsGrowth":"20.15 "},
  {"name":"合肥高新区智能语音产业集聚发展基地","outputValue":"340.00 ","outputGrowth":"28.30 ","textRevenue":"17.00 ","textRevenueGrowth":"21.40 ","fixedAssets":"13.80 ","fixedAssetsGrowth":"76.90 "},
  {"name":"合肥新能源汽车产业集聚发展基地","outputValue":"209.45 ","outputGrowth":"23.50 ","textRevenue":"10.08 ","textRevenueGrowth":"17.30 ","fixedAssets":"39.34 ","fixedAssetsGrowth":"18.40 "},
  {"name":"合肥市高新区生物医药和高端医疗器械产业集聚发展基地","outputValue":"113.91 ","outputGrowth":"12.78 ","textRevenue":"11.68 ","textRevenueGrowth":"16.68 ","fixedAssets":"20.44 ","fixedAssetsGrowth":"27.70 "},
  {"name":"合肥市包河经济开发区创意文化产业集聚发展基地","outputValue":"540.00 ","outputGrowth":"25.60 ","textRevenue":"14.00 ","textRevenueGrowth":"27.30 ","fixedAssets":"121.00 ","fixedAssetsGrowth":"23.50 "},
  {"name":"淮北市濉溪经开区铝基高端金属材料产业集聚发展基地","outputValue":"70.00 ","outputGrowth":"11.00 ","textRevenue":"3.26 ","textRevenueGrowth":"22.56 ","fixedAssets":"27.40 ","fixedAssetsGrowth":"-20.00 "},
  {"name":"亳州谯城经开区现代中药产业集聚发展基地","outputValue":"230.40 ","outputGrowth":"14.60 ","textRevenue":"6.68 ","textRevenueGrowth":"18.40 ","fixedAssets":"105.78 ","fixedAssetsGrowth":"30.16 "},
  {"name":"宿州市高新区云计算产业集聚发展基地","outputValue":"38.11 ","outputGrowth":"44.19 ","textRevenue":"1.11 ","textRevenueGrowth":"73.50 ","fixedAssets":"31.20 ","fixedAssetsGrowth":"18.70 "},
  {"name":"蚌埠硅基新材料产业园硅基新材料集聚发展基地","outputValue":"265.00 ","outputGrowth":"17.00 ","textRevenue":"4.20 ","textRevenueGrowth":"12.00 ","fixedAssets":"56.30 ","fixedAssetsGrowth":"13.40 "},
  {"name":"阜阳太和经开区现代医药产业集聚发展基地","outputValue":"163.70 ","outputGrowth":"20.30 ","textRevenue":"6.68 ","textRevenueGrowth":"26.50 ","fixedAssets":"99.57 ","fixedAssetsGrowth":"36.02 "},
  {"name":"淮南市高新区大数据产业集聚发展基地","outputValue":"11.57 ","outputGrowth":"-0.50 ","textRevenue":"1.43 ","textRevenueGrowth":"31.57 ","fixedAssets":"31.31 ","fixedAssetsGrowth":"15.98 "},
  {"name":"滁州市经开区智能家电产业集聚发展基地","outputValue":"360.00 ","outputGrowth":"12.00 ","textRevenue":"10.53 ","textRevenueGrowth":"11.10 ","fixedAssets":"76.70 ","fixedAssetsGrowth":"25.30 "},
  {"name":"六安市霍山高桥湾现代产业园高端装备基础零部件产业集聚发展基地","outputValue":"70.90 ","outputGrowth":"5.25 ","textRevenue":"2.60 ","textRevenueGrowth":"4.00 ","fixedAssets":"13.70 ","fixedAssetsGrowth":"18.50 "},
  {"name":"马鞍山市博望高新区高端数控机床产业集聚发展试验基地","outputValue":"18.40 ","outputGrowth":"1.60 ","textRevenue":"22.25 ","textRevenueGrowth":"15.01 ","fixedAssets":"12.65 ","fixedAssetsGrowth":"36.00 "},
  {"name":"马鞍山经开区先进轨道交通装备产业集聚发展基地","outputValue":"32.80 ","outputGrowth":"5.54 ","textRevenue":"35.12 ","textRevenueGrowth":"19.05 ","fixedAssets":"38.04 ","fixedAssetsGrowth":"12.00 "},
  {"name":"芜湖鸠江区机器人产业集聚发展基地","outputValue":"81.74 ","outputGrowth":"13.40 ","textRevenue":"6.22 ","textRevenueGrowth":"35.80 ","fixedAssets":"33.00 ","fixedAssetsGrowth":"24.20 "},
  {"name":"芜湖新能源汽车产业集聚发展基地","outputValue":"204.30 ","outputGrowth":"27.40 ","textRevenue":"7.30 ","textRevenueGrowth":"30.30 ","fixedAssets":"32.13 ","fixedAssetsGrowth":"17.40 "},
  {"name":"芜湖现代农业机械产业集聚发展基地","outputValue":"112.03 ","outputGrowth":"7.70 ","textRevenue":"4.01 ","textRevenueGrowth":"11.50 ","fixedAssets":"32.75 ","fixedAssetsGrowth":"8.00 "},
  {"name":"芜湖市新芜经济开发区通用航空产业集聚发展基地","outputValue":"77.45 ","outputGrowth":"12.20 ","textRevenue":"1.85 ","textRevenueGrowth":"12.00 ","fixedAssets":"36.50 ","fixedAssetsGrowth":"32.30 "},
  {"name":"宣城宁国经开区核心基础零部件产业集聚发展基地","outputValue":"216.40 ","outputGrowth":"18.50 ","textRevenue":"10.30 ","textRevenueGrowth":"10.20 ","fixedAssets":"38.70 ","fixedAssetsGrowth":"17.00 "},
  {"name":"铜陵经开区铜基新材产业集聚发展基地","outputValue":"492.45 ","outputGrowth":"17.70 ","textRevenue":"5.90 ","textRevenueGrowth":"7.90 ","fixedAssets":"34.10 ","fixedAssetsGrowth":"159.00 "},
  {"name":"池州市经开区半导体产业集聚发展基地","outputValue":"47.18 ","outputGrowth":"23.20 ","textRevenue":"1.83 ","textRevenueGrowth":"77.60 ","fixedAssets":"18.40 ","fixedAssetsGrowth":"6.50 "},
  {"name":"安庆高新区化工新材料产业集聚发展基地","outputValue":"128.63 ","outputGrowth":"19.10 ","textRevenue":"10.36 ","textRevenueGrowth":"2.30 ","fixedAssets":"42.86 ","fixedAssetsGrowth":"28.10 "},
  {"name":"黄山市现代服务业产业园文化旅游产业集聚发展基地","outputValue":"69.10 ","outputGrowth":"20.00 ","textRevenue":"5.30 ","textRevenueGrowth":"23.00 ","fixedAssets":"40.00 ","fixedAssetsGrowth":"16.00 "}
]

for (let i = 0; i < 25; i++) {
  if(Users)
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Users[i % 25].name,
    outputValue: Number(Users[i % 25].outputValue),
    outputGrowth: Number(Users[i % 25].outputGrowth),
    textRevenue: Number(Users[i % 25].textRevenue),
    textRevenueGrowth: Number(Users[i % 25].textRevenueGrowth),
    fixedAssets: Number(Users[i % 25].fixedAssets),
    fixedAssetsGrowth: Number(Users[i % 25].fixedAssetsGrowth)
  }));
}
console.log(Users)
export { LoginUsers, Users };
