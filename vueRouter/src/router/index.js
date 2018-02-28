import Vue from 'vue' // 引入vue
import Router from 'vue-router' //引入vue-router
import HelloWorld from '@/components/HelloWorld' //引入vue-router
import Hi from '@/components/Hi'

Vue.use(Router) // Vue全局使用Router

export default new Router({
    routes: [{ // 每一个链接都是一个对象
        path: '/', // 链接路径
        name: 'HelloWorld', // 路由名称，
        component: HelloWorld // 对应的组件模板
    }, {
        path: '/Hi',
        name: 'Hi',
        component: Hi
    }]
})