import Home from "./views/Home.vue";
import Shortcuts from "./views/Shortcuts.vue";
import About from "./views/About.vue";

/* 
	"param" 			:test
				->		$route.params.test;
*/

/* prettier-ignore */
export default [
	{ name: 'about', 		path: '/about', 			component: About },
	{ name: 'shortcuts', path: '/shortcuts', component: Shortcuts },
	{ name: 'home', 		path: '/', 					component: Home },
	// { name: 'not-found' }
]
