import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Introduce from './views/nav1/Introduce.vue'
import Page1 from './views/nav2/page1.vue'
import Page6 from './views/nav3/Page6.vue'
import Echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/introduce', component: Introduce, name: '政策与背景' },
            { path: '/table', component: Table, name: '企业数据' }
            // { path: '/form', component: Form, name: 'Form' },
            // { path: '/user', component: user, name: '列表' },
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航二',
    //     iconCls: 'fa fa-id-card-o',
    //     children: [
    //         { path: '/page1', component: Page1, name: 'Page1' },
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },
    {
        path: '/',
        component: Home,
        name: '折线图',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: Echarts, name: '折线图' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;