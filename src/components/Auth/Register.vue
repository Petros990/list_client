<template>
  <div class="register-container d-flex align-items-center justify-content-center h-5">
      <div class="form-group w-50" >
        <h3>Signup</h3>
        <div class="group">
          <label>Image</label>
        <input type="file" @change="previewFiles" >
          <span>{{errors.first('image')}}</span>
        </div>
          <div class="group">
            <label>Name</label>
            <input
              name="name"
              v-validate="validations.name"
              class="form-control mb-2" v-model="user_data.name" type="text" placeholder="name">
            <span>{{errors.first('name')}}</span>
          </div>
        <div class="group">
            <label>Surname</label>
            <input
              name="surname"
              v-validate="validations.surname"
              class="form-control mb-2" v-model="user_data.surname" type="text" placeholder="surname">
            <span>{{errors.first('surname')}}</span>
        </div>
          <div class="group">
            <label>Age</label>
            <input
              name="age"
              v-validate="validations.age"
              class="form-control mb-2" v-model="user_data.age" type="number" placeholder="age">
            <span>{{errors.first('age')}}</span>
          </div>

          <div class="group">
            <label>Email</label>
            <input
              name="email"
              v-validate="validations.email"
              class="form-control mb-2" v-model="user_data.email" type="email" placeholder="email">
            <span>{{errors.first('email')}}</span>
          </div>
          <div class="group">
            <label>Password</label>
            <input
              name="password"
              v-validate="validations.password"
              class="form-control mb-2" v-model="user_data.password" type="password" placeholder="password">
            <span>{{errors.first('password')}}</span>
          </div>
          <div class="group">
            <label>RePassword</label>
            <input
              name="confirm_password"
              v-validate="validations.confirm_password"
              class="form-control mb-2" v-model="user_data.confirm_password" type="password" placeholder="confirm password">
            <span>{{errors.first('confirm_password')}}</span>
          </div>
        <button @click="signup" class="btn btn-success">Register</button>
      </div>
  </div>
</template>

<script>
import Validations from './auth-validations';
export default {
  name: "Register",
  data(){
    return{
      validations: Validations,
      user_data: {
        image:null,
          id: null,
          name: null,
          surname: null,
          email: null,
          age: null
      },
      image:null,
    }

  },
  methods: {
    previewFiles(event) {
      this.image = event.target.files;
      // [0].name
      console.log(this.image);
    },
    signup(){
      this.$validator.validateAll()

        .then(res =>{
          if(res){
           this.user_data.image = this.image;
            // this.newUser.image = this.user_data.image
            console.log(this.user_data);
            this.axios.post("http://127.0.0.1:8000/api/auth/signup", this.user_data)
            .then(res =>{
              this.$router.push({name: 'Login'});
            })
            .catch(err =>{
              console.log(err.response.data);
              // alert(err.res);
            })
          }
        })
    }
  }
}
</script>

<style scoped>
.form-group{
  background-color: #845fc8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  border-radius: 30px;
  min-width: 600px;
}

</style>
