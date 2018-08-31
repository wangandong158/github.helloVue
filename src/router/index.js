import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = (resolve) => require( ['@/components/home/Home'],resolve)
const Member = (resolve) => require( ['@/components/member/Member'],resolve)
const ShopCart = (resolve) => require( ['@/components/shopcart/ShopCart'],resolve)
const Search = (resolve) => require( ['@/components/search/Search'],resolve)
const NewsList = (resolve) => require( ['@/components/news/NewsList'],resolve)
const NewsDeatil = (resolve) => require( ['@/components/news/NewsDeatil'],resolve)
const PhotoShare = (resolve) => require( ['@/components/photo/PhotoShare'],resolve)
const PhotoDetail = (resolve) => require( ['@/components/photo/PhotoDetail'],resolve)
const GoodsList = (resolve) => require( ['@/components/goods/GoodsList'],resolve)
const GoodsDetail = (resolve) => require( ['@/components/goods/GoodsDetail'],resolve)

Vue.use(Router)

export default new Router({
  mode: "hash",
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' },
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: ShopCart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    {
      path: '/news/detail',
      name: 'news.detail',
      component: NewsDeatil
    },
    {
      path: '/photo/share',
      name: 'photo.share',
      meta: {
        title: '用户中心'
      },
      component: PhotoShare
    },
    {
      path: '/photo/detail/:id',
      name: 'photo.detail',
      component: PhotoDetail
    },
    {
      path: '/goods/list',
      name: 'goods.list',
      component: GoodsList
    },
    {
      path: '/goods/detail',
      name: 'goods.detail',
      component: GoodsDetail
    }
  ]
})
