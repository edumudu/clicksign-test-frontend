<template>
  <a
    v-if="isExternal"
    target="_blank"
    rel="noopener noreferrer"
    :href="to"
  >
    <slot />
  </a>

  <RouterLink
    v-else
    v-bind="$props"
  >
    <slot />
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'AppLink',

  props: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /// @ts-ignore
    ...RouterLink.props,
  },

  setup(props) {
    const isExternal = computed(() => props.to && typeof props.to === 'string' && props.to.startsWith('http'));

    return {
      isExternal,
    };
  },
});
</script>
