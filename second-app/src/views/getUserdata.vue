<template>
    <button @click="getUserdata">Get all User!</button>
    <div v-for="User in userdata" :key="User._id">
    <p>Name: {{User.name}}</p>
    <p>Category: {{User.password}}</p>
    <br/>
    </div>
</template>

<script setup>
//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const userdata=ref(null)
//logic
async function getUserdata(){
  console.log("doing")
    try{
      console.log("still doing")
      const responce = await axios.get('http://localhost:3000/getAllUser')
      console.log(responce)
      userdata.value=responce.data
    }catch(err){
      console.log('error getting all users', err)
    }  
}
</script>

<style scoped>

</style>