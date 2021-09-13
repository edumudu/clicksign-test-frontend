import { shallowMount } from '@vue/test-utils';

import EmptyData from '../EmptyData.vue';

describe('EmptyData.vue', () => {
  it('Should match snapshot', () => {
    const wrapper = shallowMount(EmptyData);

    expect(wrapper.element).toMatchSnapshot();
  });

  it('Should render content passed in default slot', async () => {
    const wrapper = shallowMount(EmptyData, {
      slots: {
        default: '<div>Test</div>',
      },
    });

    expect(wrapper.text()).toBe('Test');
  });
});
