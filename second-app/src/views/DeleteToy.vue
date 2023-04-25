<template>
    <h3>Delete ID</h3>
    <input v-model="toyid" type="next">
    <p>{{toyid}}</p>
    <button @click="deleteData">Delete Data</button>
</template>

<script setup>
//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const toyid=ref(null)
//logic
function deleteData(){
  axios.delete(`http://localhost:3000/deletebyid/${toyid.value}`)
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