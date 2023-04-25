<template>
    <div v-if="showusername">
    <h2>Welcome {{ showusername }}</h2>
    </div>
    <div v-else>
        <p>please login</p>
    </div>

    
    <h1>Login</h1>
    <h3>Name</h3>
    <input v-model="loginname" type="next">
    <p>{{loginname}}</p>
    <h3>Password</h3>
    <input v-model="loginpassword" type="next">
    <p>{{loginpassword}}</p>
    <button @click="Userlogin">Login</button>
    <br/>
    <br/>
</template>

<script setup>
//import 
import {ref, onMounted} from 'vue'
import axios from 'axios'
//ref
const showusername=ref(null)
const loginname=ref('')
const loginpassword=ref(null)
//logic
async function Userlogin(){
  const formData={
    name: loginname.value,
    password: loginpassword.value,
  }
  try {
    console.log('making api call')
    const user = await axios.post('http://localhost:3000/login', formData)
    console.log('logged in user:', user)

    const loginUser=user.data.user
    console.log('user data for logging in:',JSON.stringify(loginUser))

    localStorage.setItem('user', JSON.stringify(loginUser))
    
    showusername.value=user.data.user.name
  } catch (error){
    console.log(error)
  }
}
//lifecycle
onMounted(()=>{
  if (localStorage.getItem('user')){
    //get data from local storage
  let user=localStorage.getItem('user')
  user = JSON.parse(user)
  console.log(user)
  showusername.value=user.name
  }
  
})
</script>

<style scoped>

</style>