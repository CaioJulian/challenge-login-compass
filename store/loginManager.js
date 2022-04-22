import people from '@/server/people.json'

export const state = () => ({
  userLogin: {},
})

export const mutations = {
  setLogin(state, payload) {
    state.userLogin = payload
  },
}

export const actions = {
  fetchLogin({ commit }, form) {
    const { logins } = people
    const { user, password } = form
    let login = {}

    if (logins && logins.length > 1) {
      login = logins.find((e) => e.login === user && e.password === password)
    }

    if (!login) login = {}

    commit('setLogin', login)
  },
}
