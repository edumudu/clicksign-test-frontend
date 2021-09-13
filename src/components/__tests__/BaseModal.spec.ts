import { shallowMount, VueWrapper } from '@vue/test-utils';

import BaseModal from '../BaseModal.vue';

describe('BaseModal.vue', () => {
  it('Should render content passed in default slot', async () => {
    const wrapper = shallowMount(BaseModal, {
      slots: {
        default: '<div>Test</div>',
      },
    });

    expect(wrapper.text()).toBe('Test');
  });

  it('Should render content passed in header slot', async () => {
    const wrapper = shallowMount(BaseModal, {
      slots: {
        header: '<div>Title</div>',
      },
    });

    expect(wrapper.text()).toBe('Title');
  });

  it('Should render content passed in actions slot', async () => {
    const wrapper = shallowMount(BaseModal, {
      slots: {
        actions: '<div>Actions</div>',
      },
    });

    expect(wrapper.text()).toBe('Actions');
  });

  describe('no slot', () => {
    let wrapper: VueWrapper<any>;

    beforeEach(() => {
      wrapper = shallowMount(BaseModal);
    });

    it('should match snapshot', () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it('Should emit close event when click outside modal content', async () => {
      await wrapper.trigger('click');

      expect(wrapper.emitted('close')).toBeTruthy();
      expect(wrapper.emitted('close')).toHaveLength(1);
    });

    it('Should emit close event when press esc', async () => {
      const evt = new KeyboardEvent('keydown', { key: 'Escape' });

      window.dispatchEvent(evt);

      expect(wrapper.emitted('close')).toBeTruthy();
      expect(wrapper.emitted('close')).toHaveLength(1);
    });

    it('Should emit close event when press esc in Edge/IE', async () => {
      const evt = new KeyboardEvent('keydown', { key: 'Esc' });

      window.dispatchEvent(evt);

      expect(wrapper.emitted('close')).toBeTruthy();
      expect(wrapper.emitted('close')).toHaveLength(1);
    });
  });
});
