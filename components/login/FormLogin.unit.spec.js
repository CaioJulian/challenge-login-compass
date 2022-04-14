import { mount } from '@vue/test-utils'
import FormLogin from '~/components/login/FormLogin.vue'

describe('FormLogin - unit', () => {
  const mountFormLogin = () => {
    const wrapper = mount(FormLogin)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountFormLogin()
    expect(wrapper.vm).toBeTruthy()
  })

  fit('should handle submit login', async () => {
    const wrapper = mountFormLogin()
    const form = {
      user: 'user.test',
      password: '123456789',
    }

    const userInput = wrapper.find('[data-testid="user-input"]')
    await userInput.setValue(form.user)

    const passwordInput = wrapper.find('[data-testid="password-input"]')
    await passwordInput.setValue(form.password)

    const button = wrapper.find('[data-testid="login-button"]')
    await button.trigger('submit')

    expect(wrapper.vm.form).toStrictEqual(form)
  })
})
