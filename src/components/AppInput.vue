<template>
  <label
    class="flex flex-col"
    :class="[$style.wrapper, classes]"
    :style="style"
  >
    <span
      v-show="label"
      :class="$style.label"
    >
      {{ label }}
    </span>

    <input
      ref="field"
      v-model="innerValue"
      type="text"
      :class="[$style.field, $style[variant]]"
      v-bind="$attrs"
    >
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  computed,
  SetupContext,
  toRefs,
  onMounted,
  PropType,
} from 'vue';

const useInput = (modelValue: Ref<string | number>, emit: SetupContext['emit']) => {
  const innerValue = computed({
    get: () => modelValue.value,
    set: (value) => emit('update:modelValue', value),
  });

  return {
    innerValue,
  };
};

const useAutoFocus = (autofocus: Ref<boolean>) => {
  const field = ref<HTMLInputElement | null>(null);

  onMounted(() => {
    if (autofocus.value && field.value) field.value.focus();
  });

  return {
    field,
  };
};

export default defineComponent({
  name: 'AppInput',
  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: '',
    },

    modelValue: {
      type: [String, Number],
      default: '',
    },

    style: {
      type: [String, Object],
      default: '',
    },

    class: {
      type: [String, Object, Array],
      default: '',
    },

    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value),
    },

    autofocus: Boolean,
  },

  setup(props, { emit }) {
    const { modelValue, autofocus } = toRefs(props);

    return {
      ...useInput(modelValue, emit),
      ...useAutoFocus(autofocus),

      classes: props.class,
    };
  },
});
</script>

<style lang="scss" module>
.wrapper + .wrapper { margin-top: 1rem; }

.label {
  font-size: 0.875rem;
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.field {
  border: 1px solid var(--gray);
  border-radius: 0.25rem;
  color: var(--text-color);
  font-size: 0.875rem;
  padding: 0.5625rem 0.625rem;
  outline: none;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: var(--color-primary);
  }

  &.secondary {
    background-color: var(--gray-lighter);
    border: none;
  }
}
</style>
