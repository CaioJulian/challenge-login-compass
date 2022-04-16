import { mount } from '@vue/test-utils'
import IndexLogin from '.'
import LogoFigureLogin from '~/components/login/LogoFigureLogin.vue'
import CardLogin from '~/components/login/CardLogin.vue'
import BannerFigureLogin from '~/components/login/BannerFigureLogin.vue'

describe('IndexLogin - integration', () => {
  const mountIndexLogin = () => {
    const wrapper = mount(IndexLogin)

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
  })
})
