<template>
    <h3>Get all item</h3>
    <input v-model="cateforall" type="next">
    <p>{{cateforall}}</p>
    <button @click="GetAllData">Send Data</button>
    <div v-for="Toys in responseforall" :key="Toys._id">
      <p>name: {{Toys.name}}</p>
      <p>category: {{Toys.category}}</p>
      <p>price: {{Toys.price}}</p>
      <br/>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
const cateforall=ref(null)
const responseforall=ref(null)

async function GetAllData(){
  
  try{
    const response = await axios.get(`http://localhost:3000/getAllToy/${cateforall.value}`)
    console.log(response)
    responseforall.value=response.data
    console.log(responseforall.value)
  }catch(err){
    console.log('error getting all toyes', err)
  }
  
}
</script>

<style scoped>

</style>