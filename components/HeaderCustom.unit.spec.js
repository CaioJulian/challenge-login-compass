import { mount } from '@vue/test-utils'
import HeaderCustom from '~/components/HeaderCustom.vue'

describe('HeaderCustom - unit', () => {
  const mountHeaderCustom = () => {
    const wrapper = mount(HeaderCustom)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountHeaderCustom()
    expect(wrapper.vm).toBeTruthy()
  })
})
