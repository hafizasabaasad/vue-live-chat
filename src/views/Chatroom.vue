<template>
 <div class="container">
    <Navbar />
    <NewChatForm />
 </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import getuser from "../composables/getUser";
import Navbar from "../components/Navbar.vue";
import { watch } from "vue";
import { useRouter } from "vue-router";
export default {
  components:{ Navbar , NewChatForm },
  setup(){
    const { user } =getuser()
    const router = useRouter()

    watch(user ,  () =>{
        if(!user.value){
         router.push({name:'welcome'})
        }
    })
  }
}
</script>

<style>

 
</style>