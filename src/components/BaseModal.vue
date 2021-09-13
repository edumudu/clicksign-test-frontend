<template>
  <div
    :class="$style.wrapper"
    @click.prevent="onClose"
  >
    <div
      :class="$style.content"
      @click.stop
    >
      <div :class="$style.header">
        <slot name="header" />
      </div>

      <div :class="$style.body">
        <slot />
      </div>

      <div :class="$style.actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue';

const useActions = (emit: (event: 'close') => void) => {
  const onClose = () => {
    emit('close');
  };

  return {
    onClose,
  };
};

const useKeymaps = (emit: (event: 'close') => void) => {
  const { onClose } = useActions(emit);

  const keymap = {
    Escape: onClose,
    Esc: onClose,
  };

  const onKeydown = (event: KeyboardEvent) => {
    const { key } = event;

    if (!Object.keys(keymap).includes(key)) return;

    const handler = keymap[key as keyof typeof keymap];

    handler();
  };

  window.addEventListener('keydown', onKeydown);

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown);
  });
};

export default defineComponent({
  name: 'BaseModal',
  emits: ['close'],

  setup(_, { emit }) {
    useKeymaps(emit);

    return {
      ...useActions(emit),
    };
  },
});
</script>

<style lang="css" module>
.wrapper {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}

.content {
  background: var(--white);
  border-radius: 1rem;
  width: 100%;
  max-width: 432px;
}

.body {
  padding: 1.375rem 1.5rem;
  min-height: 92px;
}

.header {
  font-size: 1rem;
  color: var(--text-color);
  padding: 1rem;
  border-bottom: 2px solid var(--gray);
}

.actions {
  padding: 0.937rem 1rem;
  border-top: 2px solid var(--gray);
}
</style>
