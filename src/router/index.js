import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/refuge',
		name: 'refuge',
		component: () => import(/* webpackChunkName: "about" */ '../views/Refuge/Refuge.vue'),
	},
	{
		path: '/actuality',
		name: 'ActualityListing',
		component: () => import(/* webpackChunkName: "ActualityListing" */ '../views/Actuality/ActualityListing.vue'),
	},
	{
		path: '/actuality/:id',
		name: 'Article',
		component: () => import(/* webpackChunkName: "Article" */ '../views/Actuality/Article.vue')
	},
	{
		path: '/animals/adoption',
		name: 'Adoption',
		component: () => import(/* webpackChunkName: "Adoption" */ '../views/Adoption/AdoptionListing.vue')
	},
	{
		path: '/animals/lost',
		name: 'LostListing',
		component: () => import(/* webpackChunkName: "LostListing" */ '../views/Lost/LostListing.vue')
	},
	{
		path: '/animals/find',
		name: 'FindListing',
		component: () => import(/* webpackChunkName: "FindListing" */ '../views/Find/FindListing.vue')
	},


	{
		path: '*',
		component: () => import(/* webpackChunkName: "error" */'../views/Error/404.vue')
	},
	{
		path: '/500',
		component: () => import(/* webpackChunkName: "error" */'../views/Error/500.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


router.beforeEach((to, from, next) => {
	store.dispatch('updateRouterName', to.name)
	window.scroll(0, 0)
	next();
})

export default router
