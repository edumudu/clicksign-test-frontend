<template>
  <header :class="$style.header">
    <LogoSvg class="mr-auto" />

    <AppButton
      v-if="hasContact"
      variant="secondary"
      @click="onContactCreate"
    >
      <IconPlus class="font-md" />

      Criar contato
    </AppButton>

    <AppInput
      v-model="search"
      placeholder="Buscar..."
      class="flex-1"
      variant="secondary"
      :class="$style.searchField"
    />
  </header>

  <div
    v-if="hasContact"
    :class="$style.content"
  >
    <table :class="$style.table">
      <thead>
        <tr :class="$style.tableRow">
          <th />
          <th :class="$style.tableHeadCell">
            Contatos
          </th>
          <th :class="$style.tableHeadCell">
            E-mail
          </th>
          <th :class="$style.tableHeadCell">
            Telefone
          </th>
          <th />
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="contact in contacts"
          :key="contact.id"
          class="font-sm"
          :class="{
            [$style.tableRow]: true,
            [$style.tbodyRow]: true,
            [$style.highlightedRow]: contact.id === highlightedId
          }"
        >
          <td>
            <AppAvatar
              :src="contact.avatar"
              :name="contact.name"
            />
          </td>

          <td>
            {{ contact.name }}
          </td>

          <td>
            {{ contact.email }}
          </td>

          <td>
            {{ contact.phone }}
          </td>

          <td>
            <div :class="$style.actions">
              <AppLink :to="{ name: 'ContactEdit', params: { contactId: contact.id } }">
                <IconEdit />
              </AppLink>

              <AppLink :to="{ name: 'ContactDelete', params: { contactId: contact.id } }">
                <IconDelete />
              </AppLink>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div
    v-else
    class="text-center"
    :class="$style.content"
  >
    <EmptyData />

    <AppButton
      large
      variant="secondary"
      :class="$style.createContact"
      @click="onContactCreate"
    >
      <IconPlus class="font-md" />

      Criar contato
    </AppButton>
  </div>

  <RouterView @highlight-id="onHighlightId" />
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  Ref,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useContacts } from '@/services/contact.service';
import { Contact } from '@/types/contact';

import EmptyData from '@/components/EmptyData.vue';
import AppAvatar from '@/components/AppAvatar.vue';
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import AppLink from '@/components/AppLink.vue';

import IconDelete from '@/assets/svg/icons/icon-delete.svg?inline';
import IconEdit from '@/assets/svg/icons/icon-edit.svg?inline';
import IconPlus from '@/assets/svg/icons/icon-plus.svg?inline';
import LogoSvg from '@/assets/svg/logo.svg?inline';

const useSearch = (contacts: Ref<Contact[]>) => {
  const route = useRoute();
  const router = useRouter();

  const search = computed<string>({
    get: () => (Array.isArray(route.query.search) ? route.query.search[0] || '' : route.query.search || ''),

    set(value: string) {
      router.push({ query: { search: value } });
    },
  });

  const searchedContacts = computed(() => (
    contacts.value.filter(({ name }) => name.includes(search.value))
  ));

  return {
    search,
    searchedContacts,
  };
};

const useContact = () => {
  const router = useRouter();
  const route = useRoute();
  const { fetchContacts } = useContacts();
  const contacts = ref(fetchContacts());
  const { search, searchedContacts } = useSearch(contacts);
  const hasContact = computed(() => searchedContacts.value.length > 0);

  const onContactCreate = () => {
    router.push({ name: 'ContactCreate' });
  };

  watch(() => route, () => {
    contacts.value = fetchContacts();
  }, { deep: true });

  return {
    search,
    contacts: searchedContacts,
    hasContact,
    onContactCreate,
  };
};

const useHighlight = () => {
  const highlightedId = ref<number | null>(null);

  const onHighlightId = (id: number) => {
    highlightedId.value = id;

    setTimeout(() => {
      highlightedId.value = null;
    }, 10 * 1000);
  };

  return {
    highlightedId,

    onHighlightId,
  };
};

export default defineComponent({
  name: 'PageHome',

  components: {
    EmptyData,
    AppAvatar,
    IconDelete,
    IconEdit,
    AppButton,
    LogoSvg,
    IconPlus,
    AppInput,
    AppLink,
  },

  setup() {
    return {
      ...useContact(),
      ...useHighlight(),
    };
  },
});
</script>

<style lang="scss" module>
.content {
  margin-top: 6rem;
  padding: 0 1rem;
}

.table {
  width: 100%;
  border-radius: 0.25rem;
  border-collapse: collapse;

  th {
    text-align: left;
  }
}

.tableHeadCell {
  color: var(--gray-dark);
  font-size: 0.8125rem;
}

.tableRow {
  display: grid;
  grid-template-columns: 24px repeat(4, 1fr);
  align-items: center;
  gap: 1rem;
  color: var(--text-color);
  padding: 0.75rem 0.5rem;
  background-color: var(--white);
  border: 1px solid var(--gray-light);
  transition: background-color 0.2s ease-in-out;
}

.tbodyRow {
  &:hover,
  &.highlightedRow { background-color: var(--pink-lighter); }
}

.actions {
  font-size: 1rem;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
}

.createContact {
  margin-top: 1.5rem;
}

// header
.header {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  align-items: center;
  color: var(--color-primary);
}

.searchField {
  max-width: 1032px;
}
</style>
