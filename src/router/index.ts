import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    component: { template: '<div>about</div>' }
  }
]

const router: Router = createRouter({
  routes,
  history: createWebHistory()
})

// router.afterEach(() => {
//   // console.log(to);
//   console.log(location.href);

// })

export default router;
