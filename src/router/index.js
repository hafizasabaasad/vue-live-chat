import { createRouter, createWebHistory } from 'vue-router'
import welcome from "../views/welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from '../firebase/config';

// auth guard

const  requireAuth = (to ,form , next) =>{
  let user = projectAuth.currentUser
  console.log('current user in auth guard:', user);
  if(!user){
    next({name:'welcome'})
  }else{
    next()
  }
  

}



const routes = [
  {
    path:'/',
    name:'welcome',
    component: welcome
  },
  {
    path:'/Chatroom',
    name:'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
