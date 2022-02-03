import Home from './views/Home.vue';
import Component from './views/Component.vue';
import About from './views/About.vue';

/* 
	"param" 			:test
				->		$route.params.test;
*/

/* prettier-ignore */
export default [
	{ name: 'about', 		path: '/about', 			component: About },
	{ name: 'component', path: '/:component_id', component: Component },
	{ name: 'home', 		path: '/', 					component: Home },
	// { name: 'not-found' }
]
