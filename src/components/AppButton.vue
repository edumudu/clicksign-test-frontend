<template>
  <button
    :class="[$style.btn, classes]"
    type="button"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  Ref,
  toRefs,
  useCssModule,
} from 'vue';

type useDynamicClassesParams = {
  outline: Ref<boolean>;
  large: Ref<boolean>;
  variant: Ref<'primary' | 'secondary'>;
}

const useDynamicClasses = ({ outline, large, variant }: useDynamicClassesParams) => {
  const style = useCssModule();

  const classes = {
    [style[variant.value]]: true,
    [style.outline]: outline.value,
    [style.large]: large.value,
  };

  return {
    classes,
  };
};

export default defineComponent({
  name: 'AppButton',

  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value),
    },

    outline: Boolean,
    large: Boolean,
  },

  setup(props) {
    const { outline, large, variant } = toRefs(props);
    const { classes } = useDynamicClasses({ outline, large, variant });

    return {
      classes,
    };
  },
});
</script>

<style lang="scss" module>
.btn {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 1rem;
  font-size: 0.875rem;
  padding: 0.5rem 1.26rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  border: none;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.16),
    0 0 0 0.5px rgba(0, 0, 0, 0.08),
    inset 0 0 0 0.5px rgba(0, 0, 0, 0.08),
    0 2px 4px 0.5px rgba(0, 0, 0, 0.16);

  &:disabled {
    opacity: 0.32;
  }

  &.primary {
    color: var(--white);
    background-color: var(--color-primary);
  }

  &.secondary {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }

  &.outline {
    color: var(--color-primary);
    background-color: transparent;
    box-shadow: none;
  }

  &.large {
    padding: 0.75rem 1.375rem;
  }
}
</style>
