<template>
    <div class="menubar">
        <h1 class="logo">Menu</h1>
        <div class="links">
            <router-link class="one-link" to="/signup">Sign up</router-link>
            <router-link class="one-link" to="/login">Login</router-link>
            <router-link class="one-link" to="/userUpdata">User Updata</router-link>
            <router-link class="one-link" to="/getAllToy">Get All Toy</router-link>
            <router-link class="one-link" to="/createToyData">Create Toy Data</router-link>
            <router-link class="one-link" to="/getToyData">Get Toy Data</router-link>
            <router-link class="one-link" :to="{ name: 'GetOneToy'}">Get One Toy</router-link>
            <router-link class="one-link" to="/DeleteToy">Delete Toy</router-link>
            <router-link class="one-link" :to="{ name: 'UpdateToy'}">Update Toy</router-link>
            <router-link class="one-link" :to="{ name: 'getUserdata'}">Get User data</router-link>
            <router-link class="one-link" :to="{ name: 'GetOneUserData'}">Get One User Data</router-link>
            <router-link class="one-link" :to="{ name: 'deleteUserData'}">Delete User Data</router-link>
            <router-link class="one-link" :to="{ name: 'Userlogout'}">User logout</router-link>
        </div>
    </div>
    
    
</template>

<script setup>

</script>

<style scoped>
.menubar{
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color: rgb(204, 238, 255);
}
.one-link{
    text-decoration:none;
    color:cornflowerblue;
    padding: 8px;
}
</style>