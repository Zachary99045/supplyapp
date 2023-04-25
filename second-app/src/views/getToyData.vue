<template>
    <button @click="getToydata">Get all Toy!</button>
    <div v-for="Toys in toydata" :key="Toys._id">
    <p>Name: {{Toys.name}}</p>
    <p>Category: {{Toys.category}}</p>
    <p>Price: {{Toys.price}}</p>
    <br/>
    </div>
    <br/>
</template>

<script setup>
//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const toydata=ref(null)
//logic
async function getToydata(){
  console.log("doing")
    try{
      console.log("still doing")
      const responce = await axios.get('http://localhost:3000/getAllToy')
      console.log(responce)
      toydata.value=responce.data
    }catch(err){
      console.log('error getting all toyes', err)
    }
    
}

</script>

<style scoped>

</style>