import { mount } from '@vue/test-utils'
import BannerCustom from '~/components/BannerCustom.vue'

describe('BannerCustom - unit', () => {
  const mountBannerCustom = () => {
    const wrapper = mount(BannerCustom)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountBannerCustom()
    expect(wrapper.vm).toBeTruthy()
  })
})
