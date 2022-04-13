import { mount } from '@vue/test-utils'
import FigureLogin from '~/components/login/FigureLogin.vue'

describe('FigureLogin - unit', () => {
  const mountFigureLogin = () => {
    const wrapper = mount(FigureLogin)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFigureLogin()
    expect(wrapper.vm).toBeTruthy()
  })
})
