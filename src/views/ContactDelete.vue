<template>
  <BaseModal @close="onCancel">
    <template #header>
      Excluir contato
    </template>

    Deseja realmente excluir o contato?

    <template #actions>
      <div
        class="flex justify-end"
        :class="$style.actions"
      >
        <AppButton
          outline
          @click="onCancel"
        >
          Cancelar
        </AppButton>

        <AppButton @click.prevent="onDelete">
          Excluir
        </AppButton>
      </div>
    </template>
  </BaseModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useContacts } from '@/services/contact.service';

import BaseModal from '@/components/BaseModal.vue';
import AppButton from '@/components/AppButton.vue';

export default defineComponent({
  name: 'PageContactDelete',

  components: {
    BaseModal,
    AppButton,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const { deleteContact } = useContacts();

    const onCancel = () => {
      router.push({ name: 'ContactIndex' });
    };

    const onDelete = () => {
      deleteContact(Number(route.params.contactId));
      router.push({ name: 'ContactIndex' });
    };

    return {
      onCancel,
      onDelete,
    };
  },
});
</script>

<style lang="scss" module>
.actions {
  gap: 1rem;
}
</style>
