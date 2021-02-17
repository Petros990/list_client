<template>
  <div class="login-container d-flex align-items-center justify-content-center h-5">
    <div class="form-group w-50">
      <h3>Login</h3>
      <input
        name="email"
        v-validate="validations.email"
        class="form-control mb-2" v-model="user_data.email" type="email" placeholder="email">
      <span>{{errors.first('email')}}</span>
      <span v-if="a == 1 "> email is incorrect </span>
      <input
        name="password"
        v-validate="validations.password"
        class="form-control mb-2" v-model="user_data.password" type="password" placeholder="password">
      <span>{{errors.first('password')}}</span>
      <span v-if="a == 1 "> password is incorrect </span>
      <button @click="Login" class="btn btn-success">
<!--        <router-link :to="{name: 'User'}"></router-link>-->
        Login</button>
    </div>

  </div>
</template>

<script>
import Validations from './auth-validations';
import AuthService from "../../services/authService";
export default {
  name: "Login",
  data(){
    return{
      validations: Validations,
      user_data: {

      },
      a:{},
    }

  },
  methods:{
    Login(){
      this.$validator.validateAll()
      .then(res =>{
        if(res){
          AuthService.login(this.user_data)
          .then(res => {
            this.$store.commit('setUser', res.user);
              localStorage.setItem('token',res.access_token);
            // this.$store.commit('setToken', res.access_token);
            this.$router.push({name: 'UserProfile'});
          })
          // this.axios.post("http://127.0.0.1:8000/api/auth/login", this.user_data)
          //   .then(res =>{
          //     alert('You are loged in successfully');
          //     this.$router.push({name: 'User'});
          //   })
          //   .catch(err =>{
          //     this.a = 1 ;
          //     console.log(err.response.data);
          //     // alert(err.err);
          //   })
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
}
.form-group > input{
  width: 50% ;
}
</style>
