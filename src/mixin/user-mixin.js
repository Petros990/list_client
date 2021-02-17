import Vue from "vue";
import AuthService from "../services/authService";


export default Vue.mixin({
  methods:{
    checkAuth(){
      const token = `Bearer ${localStorage.getItem('token')}`;
      AuthService.me(token)
        .then(res => {
          console.log(res)
          this.$store.commit('setUser', res);
        })
    }
  },
  computed:{
    user(){
         return this.$store.getters.user || JSON.parse(localStorage.getItem('user') || null);
    }
  }
})
