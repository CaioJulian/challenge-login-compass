import { mount } from '@vue/test-utils'
import FooterHome from '~/components/home/FooterHome.vue'

describe('FooterHome - unit', () => {
  const mountFooterHome = () => {
    const wrapper = mount(FooterHome)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFooterHome()
    expect(wrapper.vm).toBeTruthy()
  })
})
