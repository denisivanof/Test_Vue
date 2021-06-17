<template>
  <div id="app">
    <h1 class="h1">Список пользователей</h1>
    <hr>
    <users class="users-card"></users>
  </div>
</template>

<script>
import users from "@/components/users/users";

export default {
  name: 'App',
  components: {users}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: start;
}
.h1 {
  text-align: center;
}
.users-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
</style>
