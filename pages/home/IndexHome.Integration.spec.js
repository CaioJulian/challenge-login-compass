import { mount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import IndexHome from '.'
import HeaderHome from '~/components/home/HeaderHome.vue'
import BannerHome from '~/components/home/BannerHome.vue'
import FooterHome from '~/components/home/FooterHome.vue'
import CardHome from '~/components/home/CardHome.vue'
import * as managerLogin from '@/store/loginManager'

const localVue = createLocalVue()
localVue.use(Vuex)

const $router = {
  push: jest.fn(),
}

describe('IndexHome - integration', () => {
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
  const mountIndexHome = () => {
    const wrapper = mount(IndexHome, {
      localVue,
      store,
      mocks: {
        $router,
      },
    })

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountIndexHome()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should mount the components', () => {
    const wrapper = mountIndexHome()
    expect(wrapper.findComponent(HeaderHome)).toBeDefined()
    expect(wrapper.findComponent(BannerHome)).toBeDefined()
    expect(wrapper.findComponent(FooterHome)).toBeDefined()
    expect(wrapper.findComponent(CardHome)).toBeDefined()
  })
})
