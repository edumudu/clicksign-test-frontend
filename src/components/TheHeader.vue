<template>
  <header :class="$style.header">
    <div
      class="mr-auto"
      :class="$style.headerLogoWrapper"
    >
      <LogoSvg />
    </div>

    <AppButton
      v-if="hasSearchedContact"
      variant="secondary"
      :to="{ name: 'ContactCreate' }"
    >
      <IconPlus class="font-md" />

      <span :class="$style.headerContactCreateText">
        Criar contato
      </span>
    </AppButton>

    <AppInput
      v-model="searchString"
      placeholder="Buscar..."
      class="flex-1"
      variant="secondary"
      :class="$style.searchField"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useContacts } from '@/store/contact';

import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';

import IconPlus from '@/assets/svg/icons/icon-plus.svg?inline';
import LogoSvg from '@/assets/svg/logo.svg?inline';

export default defineComponent({
  name: 'TheHeader',

  components: {
    AppInput,
    AppButton,
    IconPlus,
    LogoSvg,
  },

  setup() {
    const { searchString, hasSearchedContact } = useContacts();

    return {
      hasSearchedContact,
      searchString,
    };
  },
});
</script>

<style lang="scss" module>
@import "@/assets/scss/breakpoints.scss";

.header {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  align-items: center;
  color: var(--color-primary);
  flex-wrap: wrap;

  .headerContactCreateText {
    display: none;

    @include sm {
      display: inline-block;
    }
  }

  .headerLogoWrapper {
    width: 100%;
    text-align: center;

    @include sm {
      width: auto;
    }
  };
}

.searchField {
  max-width: 1032px;
}
</style>
