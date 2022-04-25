import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import IndexLogin from '.'
import LogoFigureLogin from '~/components/login/LogoFigureLogin.vue'
import CardLogin from '~/components/login/CardLogin.vue'
import BannerFigureLogin from '~/components/login/BannerFigureLogin.vue'
import FormLogin from '~/components/login/FormLogin.vue'
import * as managerLogin from '@/store/loginManager'

const localVue = createLocalVue()
localVue.use(Vuex)

const $router = {
  push: jest.fn(),
}

describe('IndexLogin - integration', () => {
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

  const mountIndexLogin = () => {
    const wrapper = mount(IndexLogin, {
      store,
      localVue,
      mocks: {
        $router,
      },
    })

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountIndexLogin()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should mount the components', () => {
    const wrapper = mountIndexLogin()
    expect(wrapper.findComponent(LogoFigureLogin)).toBeDefined()
    expect(wrapper.findComponent(CardLogin)).toBeDefined()
    expect(wrapper.findComponent(BannerFigureLogin)).toBeDefined()
    expect(wrapper.findComponent(FormLogin)).toBeDefined()
  })
})
