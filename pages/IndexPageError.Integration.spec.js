import { mount } from '@vue/test-utils'
import IndexPageError from '.'
import HeaderCustom from '~/components/HeaderCustom.vue'
import FooterCustom from '~/components/FooterCustom.vue'
import BannerCustom from '~/components/BannerCustom.vue'
import CardCustom from '~/components/CardCustom.vue'

describe('IndexPageError - integration', () => {
  const mountIndexPageError = () => {
    const wrapper = mount(IndexPageError)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountIndexPageError()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should mount the components', () => {
    const wrapper = mountIndexPageError()
    expect(wrapper.findComponent(HeaderCustom)).toBeDefined()
    expect(wrapper.findComponent(FooterCustom)).toBeDefined()
    expect(wrapper.findComponent(BannerCustom)).toBeDefined()
    expect(wrapper.findComponent(CardCustom)).toBeDefined()
  })
})
