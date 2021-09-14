<template>
  <form @submit.prevent="onSubmit">
    <BaseModal @close="onCancel">
      <template #header>
        Criar novo contato
      </template>

      <div class="flex flex-col">
        <AppInput
          v-model="contact.name"
          label="Nome"
          autofocus
        />

        <AppInput
          v-model="contact.email"
          label="E-mail"
          type="email"
        />

        <AppInput
          v-model="contact.phone"
          label="Telefone"
          type="tel"
          :class="$style.phoneField"
        />
      </div>

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

          <AppButton
            type="submit"
            :disabled="!canSubmit"
          >
            Salvar
          </AppButton>
        </div>
      </template>
    </BaseModal>
  </form>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  SetupContext,
} from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { useContacts, CreateDto } from '@/store/contact';

import BaseModal from '@/components/BaseModal.vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import { Contact } from '@/types/contact';

const useForm = (emit: SetupContext['emit']) => {
  const router = useRouter();
  const route = useRoute();
  const { createContact, findContact, updateContact } = useContacts();

  const contactId = computed(() => Number(route.params.contactId));
  const isEditing = computed(() => !!contactId.value);

  const contact = ref<CreateDto | Contact>((isEditing.value && findContact(contactId.value)) || {
    name: '',
    email: '',
    phone: '',
  });

  const canSubmit = computed(() => Object.values(contact.value).some(Boolean));

  const onSubmit = () => {
    let id = null;

    if (isEditing.value) {
      updateContact(Number(contactId.value), contact.value);
    } else {
      id = createContact(contact.value).id;
    }

    emit('highlight-id', id);
    router.push({ name: 'ContactIndex' });
  };

  const onCancel = () => {
    router.push({ name: 'ContactIndex' });
  };

  return {
    contact,
    canSubmit,

    onSubmit,
    onCancel,
  };
};

export default defineComponent({
  name: 'PageContactCreate',

  components: {
    BaseModal,
    AppInput,
    AppButton,
  },

  setup(_, { emit }) {
    return {
      ...useForm(emit),
    };
  },
});
</script>

<style lang="scss" module>
.actions {
  gap: 1rem;
}

.phoneField {
  max-width: 128px;
}
</style>
