<template>
    <h3>Delete ID</h3>
    <input v-model="userid" type="next">
    <p>{{userid}}</p>
    <button @click="deleteUserData">Delete Data</button>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'

const userid=ref(null)

async function deleteUserData(){
  await axios.delete(`http://localhost:3000/deletebyUserid/${userid.value}`)
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