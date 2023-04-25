<template>
    <h3>Update</h3>
    <input v-model="updatetoyid" type="next">
    <p>{{updatetoyid}}</p>
    <input v-model="upname" type="next">
    <p>{{upname}}</p>
    <input v-model="upcategory" type="next">
    <p>{{upcategory}}</p>
    <input v-model="uprice" type="next">
    <p>{{uprice}}</p>
    <button @click="UpdateData">Update Data</button>
</template>

<script setup>

//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const updatetoyid=ref(null)
const upname=ref(null)
const upcategory=ref(null)
const uprice=ref(null)
//logic
function UpdateData(){
  const formData={
    name: upname.value,
    category: upcategory.value,
    price: uprice.value
  }
  console.log("formdata is:",formData )
  axios.post(`http://localhost:3000/updateToy/${updatetoyid.value}`,formData)
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