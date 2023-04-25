<template>
    <h1>Logout</h1>
    <button @click="Userlogout">Logout</button>
</template>

<script setup>

//import 
//logic
async function Userlogout(){
  console.log('logout')
  //destory the user in local storage
  localStorage.removeItem('user')
}
</script>

<style scoped>

</style>