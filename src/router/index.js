import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index/index'
// import description from '@/components/description/description'
// import blog from '@/components/blogs/index/index'
// import bindex from '@/components/blogs/blog/blog'
// import growup from '@/components/blogs/growup/growup'
// import about from '@/components/blogs/about/about'

const _import=file=>()=>import('@/components/'+file+'.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // 路由懒加载 【两种方式】
      // component: (resolve)=>{
      //    require(['@/components/index/index'],resolve)
      // },
      component:_import('index/index')
    },
    {
      path: '/blog',
      name: 'blog',
      component: _import('blogs/index/index'),
      redirect:'/bindex',
      children:[
        {
          path: '/bindex',
          name: 'bindex',
          component: _import('blogs/blog/blog'),
        },
        {
          path: '/growup',
          name: 'growup',
          component:_import('blogs/growup/growup'),
        },
        {
          path: '/about',
          name: 'about',
          component: _import('blogs/about/about'),
        }
      ]
    },
    {
      path: '/description',
      name: 'description',
      component: _import('description/description'),
    },
    {
      path: '/sbbj',
      name: 'sbbj',
      component: _import('sbbj/sbbj'),
    },
  ]
})
