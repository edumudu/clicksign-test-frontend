import { shallowMount, VueWrapper } from '@vue/test-utils';

import AppInput from '../AppInput.vue';

describe('AppAvatar.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(AppInput);
  });

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Should render type="text" input as default', () => {
    expect(wrapper.find('input').attributes('type')).toBe('text');
  });

  it.each([
    'email',
    'tel',
    'link',
  ])('Should render type="%s" input as default', async (type) => {
    await wrapper.setProps({ type });

    expect(wrapper.find('input').attributes('type')).toBe(type);
  });

  it('Should be focused when autofocus is true', () => {
    wrapper = shallowMount(AppInput, {
      props: { autofocus: true },
      attachTo: document.body,
    });

    expect(wrapper.find('input').element).toBe(document.activeElement);
  });

  it('Should render label prop text', async () => {
    await wrapper.setProps({ label: 'test' });

    expect(wrapper.text()).toContain('test');
  });
});
