<template>
    <h1>Creating User Data</h1>
    <h3>Name</h3>
    <input v-model="username" type="next">
    <p>{{username}}</p>
    <h3>Password</h3>
    <input v-model="userpassword" type="next">
    <p>{{userpassword}}</p>
    <button @click="createUserData">Send Data</button>
</template>

<script setup>
//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const username=ref('')
const userpassword=ref(null)
//logic
async function createUserData(){
  const formData={
    name: username.value,
    password: userpassword.value,
  }
  console.log("hi",formData)
  await axios.post("http://localhost:3000/user",formData)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
}
</script>

<style scoped>

</style>