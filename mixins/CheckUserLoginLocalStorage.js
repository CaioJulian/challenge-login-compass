export default {
  mounted() {
    this.checkUserLoginLocalStorage()
  },
  methods: {
    checkUserLoginLocalStorage() {
      const userLogin = JSON.parse(localStorage.getItem('userLogin'))
      let user = {}
      let router = '/login'

      if (userLogin && userLogin.login) {
        user = userLogin
        router = '/home'
      }

      this.$store.commit('loginManager/setLogin', user)
      this.$router.push(router)
    },
  },
}
