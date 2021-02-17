<template>
  <div>
    <h1>User Profile</h1>
<!--    <p>{{renderUserName}}</p>-->
  <p>{{userData.name}}</p>
  <p>{{userData.surname}}</p>
  <p>{{userData.age}}</p>
    <button>
      <router-link :to="{ name: 'Edit'}">Edit Profile</router-link>
    </button>
  </div>

</template>

<script>
// import {mapGetters} from 'vuex'
export default {
name: "User",
  data(){
    return{
      userData:{},
      // token:'',
    }
  },
  // computed: {
  //
  //    ...mapGetters(['user']),
  //   renderUserName(){
  //      return this.user.name
  //   },
  mounted() {
   this.userData = JSON.parse(localStorage.getItem('user') || null);
  // this.token = JSON.parse(localStorage.getItem('token') || null);
  }


}
</script>

<style scoped>

</style>
