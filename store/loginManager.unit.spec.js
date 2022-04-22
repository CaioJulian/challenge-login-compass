import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import { actions, mutations, state } from '@/store/loginManager.js'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('loginManager - unit', () => {
  let store, userLogin

  beforeEach(() => {
    store = new Store({
      state,
      mutations,
      actions,
    })

    userLogin = {
      login: 'alberto.helbig',
      password: 346792129,
      local: '-31.396646856036423, -52.67586252253379',
    }
  })

  it('should return the state login', () => {
    store.commit('setLogin', userLogin)
    expect(store.state.userLogin).toEqual(userLogin)
  })

  it('should return fetchLogin form user', () => {
    const form = {
      user: 'alberto.helbig',
      password: 346792129,
    }
    store.dispatch('fetchLogin', form)
    expect(store.state.userLogin).toEqual(userLogin)
  })

  it('should not return fetchLogin form user', () => {
    const form = {
      user: 'alberto.helbig',
      password: 987654321,
    }
    store.dispatch('fetchLogin', form)
    expect(store.state.userLogin).toEqual({})
  })
})
