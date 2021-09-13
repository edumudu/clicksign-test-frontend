import { shallowMount, VueWrapper } from '@vue/test-utils';

import AppButton from '../AppButton.vue';

describe('AppAvatar.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(AppButton);
  });

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Should render type="button" button as default', () => {
    expect(wrapper.attributes('type')).toBe('button');
  });

  it('Should be able to render type="submit" button', async () => {
    await wrapper.setProps({ type: 'submit' });

    expect(wrapper.attributes('type')).toBe('submit');
  });

  it('Should not emit click event when disabled', async () => {
    await wrapper.setProps({ disabled: true });
    await wrapper.trigger('click');

    expect(wrapper.emitted('click')).toBeUndefined();
  });
});
