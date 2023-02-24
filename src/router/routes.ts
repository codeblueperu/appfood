import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/modules/home/HomeView.vue";
import MainView from '@/modules/container/MainView.vue'
import AddItemView from '@/modules/addItem/AddItemView.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
      children:[
        {
          path:'home',
          name:'homeuser',
          component: HomeView
        },
        {
          path:'add-shopping-cart/:id',
          name:'addshoppingcart',
          component: AddItemView
        }
      ]
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
