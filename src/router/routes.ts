import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/modules/home/HomeView.vue";
import MainView from '@/modules/container/MainView.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/home",
      name: "homeuser",
      component: MainView,
    },
    {
      path: "",
      redirect: "/home",
    },
  ],
});

/* router.beforeEach((to, from, next) => {
    const rutaProtegida = to.matched.some(record => record.meta.requireAuth);
    const token = localStorage.getItem('token');
    if(rutaProtegida && token === null || token === ''){
        next({name: 'login'})  
    }else{
      next()
    }
  
  }) */
export default router;