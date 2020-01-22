import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);

import Posts from './components/Posts.vue';
import Post from './components/Post.vue';
import Page from './components/Page.vue';

const routes = [
	{ path: '/wp-react', component: Posts },
	{ path: '/wp-react/:slug', component: Page },
	{ path: '/wp-react/post/:slug', component: Post },
]

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
})

new Vue({
	router,
    render: h => h(App),
}).$mount('#app')
