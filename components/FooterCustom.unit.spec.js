import { mount } from '@vue/test-utils'
import FooterCustom from '~/components/FooterCustom.vue'

describe('FooterCustom - unit', () => {
  const mountFooterCustom = () => {
    const wrapper = mount(FooterCustom)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFooterCustom()
    expect(wrapper.vm).toBeTruthy()
  })
})
