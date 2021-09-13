import { shallowMount, VueWrapper } from '@vue/test-utils';

import AppAvatar from '../AppAvatar.vue';

describe('AppAvatar.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(AppAvatar);
  });

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Should render first letter of the name when not have image', async () => {
    await wrapper.setProps({ name: 'John Doe' });

    expect(wrapper.text()).toBe('J');
  });

  it('Should render the avatar when exists', async () => {
    const src = 'https://picsum.photos/id/237/200/300';
    await wrapper.setProps({ src });

    expect(wrapper.element.nodeName).toBe('IMG');
    expect(wrapper.attributes('src')).toBe(src);
  });

  it('Should render the first letter of the name when image failed to load', async () => {
    const src = 'https://isnt-image.com';
    await wrapper.setProps({ src, name: 'Billie' });

    // Wait for the image to try to load
    setTimeout(() => expect(wrapper.text()).toBe('B'), 1);
  });
});
