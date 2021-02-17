<template>
  <div class="form-group w-50" >
    <h3>Signup</h3>
    <div class="group">
      <label>Name</label>
      <input
        name="name" class="form-control mb-2" v-model="user_data.name" type="text" placeholder="name">
<!--      <span>{{errors.first('name')}}</span>-->
    </div>
    <div class="group">
      <label>Surname</label>
      <input
        name="surname" class="form-control mb-2" v-model="user_data.surname" type="text" placeholder="surname">
<!--      <span>{{errors.first('surname')}}</span>-->
    </div>
    <div class="group">
      <label>Age</label>
      <input
        name="age" class="form-control mb-2" v-model="user_data.age" type="number" placeholder="age">
<!--      <span>{{errors.first('age')}}</span>-->
    </div>

    <div class="group">
      <label>Email</label>
      <input
        name="email" class="form-control mb-2" v-model="user_data.email" type="email" placeholder="email">
<!--      <span>{{errors.first('email')}}</span>-->
    </div>

    <button @click="change" class="btn btn-success">Save Changes</button>
  </div>
</template>

<script>
// import Validations from './auth-validations';
export default {
  data(){
    return{
      // validations: Validations,
      user_data: {},
    }
  },
  methods:{
    change(){
      const token = `Bearer ${localStorage.getItem('token')}`;
      this.axios.post("http://127.0.0.1:8000/api/auth/edit", this.user_data,
        {
          headers: {'Authorization': token}
        }
      )
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err.response.data);
      })
    }
  },
  mounted() {
    this.user_data = this.user;
  },

  watch: {
    user(user) {
      this.user_data = user;
    }
  }
}
</script>

<style scoped>

</style>
