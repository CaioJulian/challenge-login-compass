import { mount } from '@vue/test-utils'
import FigureHome from '~/components/home/FigureHome.vue'

describe('FigureHome - unit', () => {
  const mountFigureHome = () => {
    const wrapper = mount(FigureHome)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFigureHome()
    expect(wrapper.vm).toBeTruthy()
  })
})
