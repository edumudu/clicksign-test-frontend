import { shallowMount, VueWrapper, RouterLinkStub } from '@vue/test-utils';

import AppLink from '../AppLink.vue';

describe('AppLink.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(AppLink, {
      props: {
        to: '/',
      },

      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });

  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Should render a external link when link starts with http', async () => {
    await wrapper.setProps({ to: 'http://google.com' });

    expect(wrapper.attributes('href')).toBe('http://google.com');
  });

  it('Should render RouterLink link when link not starts with http', async () => {
    await wrapper.setProps({ to: '/path' });

    expect(wrapper.findComponent(RouterLinkStub).exists()).toBeTruthy();
  });

  it('Should add target="_blank" and security attributes to external link', async () => {
    await wrapper.setProps({ to: 'http://google.com' });

    expect(wrapper.attributes('target')).toMatch('_blank');
    expect(wrapper.attributes('rel')).toMatch('noopener noreferrer');
  });

  it('Should allow render a target="_self" external link', async () => {
    await wrapper.setProps({ to: 'http://google.com', target: '_self' });

    expect(wrapper.attributes('target')).toMatch('_self');
  });
});
