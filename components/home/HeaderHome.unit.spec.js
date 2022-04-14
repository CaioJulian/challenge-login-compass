import { mount } from '@vue/test-utils'
import HeaderHome from '~/components/home/HeaderHome.vue'

describe('HeaderHome - unit', () => {
  const mountHeaderHome = () => {
    const wrapper = mount(HeaderHome)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountHeaderHome()
    expect(wrapper.vm).toBeTruthy()
  })
})
