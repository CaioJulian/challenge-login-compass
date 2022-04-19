import { mount } from '@vue/test-utils'
import IndexHome from '.'
import HeaderHome from '~/components/home/HeaderHome.vue'
import BannerHome from '~/components/home/BannerHome.vue'
import FooterHome from '~/components/home/FooterHome.vue'
import CardHome from '~/components/home/CardHome.vue'

describe('IndexHome - integration', () => {
  const mountIndexHome = () => {
    const wrapper = mount(IndexHome)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountIndexHome()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should mount the components', () => {
    const wrapper = mountIndexHome()
    expect(wrapper.findComponent(HeaderHome)).toBeDefined()
    expect(wrapper.findComponent(BannerHome)).toBeDefined()
    expect(wrapper.findComponent(FooterHome)).toBeDefined()
    expect(wrapper.findComponent(CardHome)).toBeDefined()
  })
})
