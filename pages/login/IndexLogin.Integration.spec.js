import { mount } from '@vue/test-utils'
import IndexLogin from '.'
import LogoFigureLogin from '~/components/login/LogoFigureLogin.vue'
import FormLogin from '~/components/login/FormLogin.vue'

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
    expect(wrapper.findComponent(FormLogin)).toBeDefined()
  })
})
