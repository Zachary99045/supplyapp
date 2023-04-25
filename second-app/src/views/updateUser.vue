<template>
    <h3>Update</h3>
    <input v-model="updateuserid" type="next">
    <p>{{updateuserid}}</p>
    <input v-model="upusername" type="next">
    <p>{{upusername}}</p>
    <input v-model="upuserpassword" type="next">
    <p>{{upuserpassword}}</p>
    <button @click="UpdateUserData">Update User Data</button>
</template>

<script setup>

//import 
import {ref} from 'vue'
import axios from 'axios'
//ref
const updateuserid=ref(null)
const upusername=ref(null)
const upuserpassword=ref(null)
//logic
async function UpdateUserData(){
  const formData={
    name: upusername.value,
    password: upuserpassword.value,
  }
  console.log("formdata is:",formData )
  await axios.post(`http://localhost:3000/updateUser/${updateuserid.value}`,formData)
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