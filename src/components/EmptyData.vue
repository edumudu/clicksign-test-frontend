<template>
  <div :class="$style.emptyData">
    <EmptyDataSvg />

    <h3 :class="$style.title">
      <slot>
        Nenhum contato foi criando ainda.
      </slot>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import EmptyDataSvg from '@/assets/svg/empty-data.svg?inline';

export default defineComponent({
  name: 'EmptyData',

  components: {
    EmptyDataSvg,
  },
});
</script>

<style lang="scss" module>
.emptyData {
  text-align: center;
}

.title {
  font-weight: 400;
  font-size: 1rem;
  color: var(--text-color);
  margin-top: 1.5rem;
}
</style>
