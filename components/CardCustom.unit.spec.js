import { mount } from '@vue/test-utils'
import CardCustom from '~/components/CardCustom.vue'

describe('CardCustom - unit', () => {
  const mountCardCustom = () => {
    const wrapper = mount(CardCustom)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountCardCustom()
    expect(wrapper.vm).toBeTruthy()
  })
})
