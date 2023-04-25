<template>
    <h3>Get one item</h3>
    <input v-model="nameforone" type="next">
    <p>{{nameforone}}</p>
    <button @click="GetOneData">Send Data</button>
    <p v-if="responcefindone">name: {{responcefindone.name}}</p>
    <p v-if="responcefindone">category: {{responcefindone.category}}</p>
    <p v-if="responcefindone">price: {{responcefindone.price}}</p>
</template>

<script setup>
//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const nameforone=ref("")
const responcefindone=ref(null)
//logic
function GetOneData(){
  const formData={
    name: nameforone.value,
  }  
  console.log("hi",formData)
  axios.post("http://localhost:3000/getOneToy",formData)
  .then((res) => {
    console.log(res)
    responcefindone.value=res.data;
  }).catch((error) => {
    console.error(error);
  });
}
</script>

<style scoped>

</style>