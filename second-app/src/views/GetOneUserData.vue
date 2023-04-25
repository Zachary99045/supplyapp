<template>
    <h3>Get one user</h3>
    <input v-model="usernameforone" type="next">
    <p>{{namefusernameforoneorone}}</p>
    <button @click="GetOneUserData">Send Data</button>
    <p v-if="responcefindone">name: {{responcefindone.name}}</p>
    <p v-if="responcefindone">password: {{responcefindone.password}}</p>
</template>

<script setup>

//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const usernameforone=ref("")
const userresponcefindone=ref(null)
//logic
async function GetOneUserData(){
  const formData={
    name: usernameforone.value,
  }  
  console.log("hi",formData)
  await axios.post("http://localhost:3000/getOneUser",formData)
  .then((res) => {
    console.log(res)
    userresponcefindone.value=res.data;
  }).catch((error) => {
    console.error(error);
  });
}
</script>

<style scoped>

</style>