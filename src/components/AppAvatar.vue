<template>
  <img
    v-if="hasImage"
    :class="[$style.img]"
    :src="src"
    :alt="name"
    @error="onImageError"
  >

  <div
    v-else
    :class="[$style.img, $style.placeholder]"
    :style="{ backgroundColor: color }"
  >
    {{ firstLetter }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

import { strToHexColor } from '@/utils/hexdecimal';

export default defineComponent({
  name: 'AppAvatar',

  props: {
    src: {
      type: String,
      default: '',
    },

    name: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const failedToLoad = ref(false);
    const hasImage = computed(() => !!props.src && !failedToLoad.value);
    const firstLetter = computed(() => props.name.charAt(0).toUpperCase());
    const color = computed(() => strToHexColor(props.name));

    const onImageError = () => {
      failedToLoad.value = true;
    };

    return {
      color,
      firstLetter,
      hasImage,

      onImageError,
    };
  },
});
</script>

<style lang="scss" module>
.img {
  $size: 24px;

  border-radius: 50%;
  width: $size;
  height: $size;
}

.placeholder {
  font-size: 1rem;
  display: grid;
  place-items: center;
  color: var(--white);
}
</style>
