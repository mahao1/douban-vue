import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index'
import indexHome from '../pages/indexHome'
import movie from '../pages/movie'
import movieHome from '../pages/movieHome'
import movieDetail from '../pages/movieDetail'
import book from '../pages/book'
import bookHome from '../pages/bookHome'
import user from '../pages/user'
import userHome from '../pages/userHome'
import login from '../pages/login'
import register from '../pages/register'

Vue.use(Router)

export default new Router({
	mode: 'history', //去掉地址#  默认hash模式
	routes: [
	  {
			path: '/',
			redirect: '/index/'
		},
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '',
          redirect: '/index/indexHome'
        },
        {
          path: 'indexHome',
          name: 'indexHome',
          component: indexHome
        }
      ]
    },
    {
      path: '/movie',
      component: movie,
      children: [
        {
          path: '',
          redirect: '/movie/movieHome'
        },
        {
          path: 'movieHome',
          name: 'movieHome',
          component: movieHome
        },
        {
          path: 'movieDetail',
          name: movieDetail,
          component: movieDetail
        }
      ]
    },
    {
      path: '/book',
      component: book,
      children: [
        {
          path: '/',
          name: 'bookHome',
          component: bookHome
        }
      ]
    },
    {
      path: '/user',
      component: user,
      children: [
        {
          path: '',
          redirect: '/user/userHome'
        },
        {
          path: 'userHome',
          name: 'userHome',
          component: userHome
        },
        {
          path: 'login',
          name: 'login',
          component: login
        },
        {
          path: 'register',
          name: 'register',
          component: register
        }
      ]
    },
    {
      path: '*',
      redirect: '/index/'
    }
	]
})
