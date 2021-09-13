<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { ContactTableName } from '@/services/contact.service';
import { createTable } from './database';

const useBootstrap = () => {
  createTable(ContactTableName);
};

export default defineComponent({
  name: 'App',

  setup() {
    useBootstrap();
  },
});
</script>
