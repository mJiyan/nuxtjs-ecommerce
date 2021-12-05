import { mount, shallowMount } from '@vue/test-utils'
import Header from '../components/Header'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header);
    expect(wrapper.vm).toBeTruthy();
  })

})
