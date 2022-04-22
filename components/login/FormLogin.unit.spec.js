import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import FormLogin from '~/components/login/FormLogin.vue'
import * as managerLogin from '@/store/loginManager'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FormLogin - unit', () => {
  let store, loginManager

  beforeEach(() => {
    loginManager = {
      namespaced: true,
      ...managerLogin,
    }

    store = new Store({
      modules: {
        loginManager,
      },
    })
  })

  const mountFormLogin = () => {
    const wrapper = mount(FormLogin, {
      store,
      localVue,
    })

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFormLogin()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should handle submit login', async () => {
    const wrapper = mountFormLogin()
    const form = {
      user: 'alberto.helbig',
      password: 346792129,
    }

    const userInput = wrapper.find('[data-testid="user-input"]')
    await userInput.setValue(form.user)

    const passwordInput = wrapper.find('[data-testid="password-input"]')
    await passwordInput.setValue(form.password)

    const button = wrapper.find('[data-testid="login-button"]')
    await button.trigger('submit')

    const { userLogin } = store.state.loginManager

    expect(wrapper.vm.form).toStrictEqual(form)
    expect(userLogin.login).toEqual(form.user)
    expect(userLogin.password).toEqual(form.password)
  })
})
