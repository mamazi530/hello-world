import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import('../views/login.vue')
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/home.vue'),
		children: [
			{
				path: '/getLastStatus',
				name: 'getLastStatus',
				component: () => import('../views/check/getLastStatus.vue'),
			},
			{
				path: '/getStatusByID',
				name: 'getStatusByID',
				component: () => import('../views/check/getStatusByID.vue'),
			},
			{
				path: '/cnHCMmst',
				name: 'cnHCMmst',
				component: () => import('../views/table/hcm_mst.vue'),
			}
		]
	},
]

const router = new Router({
	mode: 'history',

	routes
})

export default router