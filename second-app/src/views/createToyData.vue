<template>
    <h1>Creating Data</h1>
    <h3>Name</h3>
    <input v-model="name" type="next">
    <p>{{name}}</p>
    <h3>Category</h3>
    <input v-model="category" type="next">
    <p>{{category}}</p>
    <h3>Price</h3>
    <input v-model="price" type="next">
    <p>{{price}}</p>
    <p>Picture</p>
    <input v-model="picture" type="next">
    <p>{{picture}}</p>
    <button @click="createData">Send Data</button>

 
</template>

<script setup>
//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const name=ref('')
const category=ref(null)
const price=ref(0)
const picture=ref('')
//logic
function createData(){
  const formData={
    name: name.value,
    category: category.value,
    price: price.value,
    picture: picture.value,
  }
  console.log("hi",formData)
  axios.post("http://localhost:3000/toy",formData)
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