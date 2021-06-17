<template>
  <div>
    <div class="users" v-for="user in allUsers" :key="user.id">
      <div>№ {{ user.id }}</div>
      <div><strong>Name:</strong> {{ user.name }}</div>
      <div><strong>Username: </strong>{{ user.username }}</div>
      <div><strong>Email:</strong> {{ user.email }}</div>
      <div><strong>Address:</strong>
        <div><strong>Street:</strong> {{ user.address.street }}</div>
        <div><strong>Suite:</strong> {{ user.address.suite }}</div>
        <div><strong>City:</strong> {{ user.address.city }}</div>
      </div>
      <div><strong>Phone:</strong> {{ user.phone }}</div>
      <div><strong>Website:</strong> {{ user.website }}</div>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "users",
  computed: mapGetters(['allUsers']),
  methods: mapActions(['getUsers']),
  async mounted() {
    this.getUsers();
  }
}
</script>

<style scoped>
.users {
  border: 2px solid black;
  border-radius: 5px;
  background-color: aquamarine;
  margin: 10px;
  padding: 10px;
  width: 300px;
}

</style>