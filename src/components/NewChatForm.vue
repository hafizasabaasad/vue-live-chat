<template>
   <form>
    <textarea placeholder="Type a message and hit enter to send ..." v-model="message" @keypress.enter.prevent="handleSubmit"></textarea>
    <!-- <div class="error">{{ error }}</div> -->
   </form>
</template>

<script>
import { ref } from 'vue'
import getuser from '../composables/getUser'
// import  useCollection  from'../composables/useCollection'
import {timestamp} from '../firebase/config'

export default {
setup(){
    const{ user } = getuser()

    // const { addDoc , error} = useCollection('messages')
    const message = ref('')

    const handleSubmit = async() =>{
        const chat = {
            name: user.value.displayName,
            message: message.value,
            createdAt: timestamp()
        }
        // await addDoc(chat)
        // if (!error.value) {
        //     message.value = ''
            
        // }
        console.log(chat);
        message.value = ''

    }
    return { message, handleSubmit }
}
}
</script>

<style scoped>\form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}

</style>