import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import blog from '@/components/blog/blog'
import description from '@/components/description/description'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
    },
    {
      path: '/description',
      name: 'description',
      component: description,
    }
  ]
})
