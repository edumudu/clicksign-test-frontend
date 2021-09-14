<template>
  <div
    v-if="hasSearchedContact"
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
    :class="[$style.content, $style.contentEmpty]"
  >
    <EmptyData />

    <AppButton
      large
      variant="secondary"
      :class="$style.createContact"
      :to="{ name: 'ContactCreate' }"
    >
      <IconPlus class="font-md" />

      Criar contato
    </AppButton>
  </div>

  <RouterView @highlight-id="onHighlightId" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useContacts } from '@/store/contact';

import EmptyData from '@/components/EmptyData.vue';
import AppAvatar from '@/components/AppAvatar.vue';
import AppButton from '@/components/AppButton.vue';
import AppLink from '@/components/AppLink.vue';

import IconDelete from '@/assets/svg/icons/icon-delete.svg?inline';
import IconEdit from '@/assets/svg/icons/icon-edit.svg?inline';
import IconPlus from '@/assets/svg/icons/icon-plus.svg?inline';

const useContact = () => {
  const { hasSearchedContact, fetchContacts, searchedContacts } = useContacts();

  fetchContacts();

  return {
    contacts: searchedContacts,
    hasSearchedContact,
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
    IconPlus,
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
@import "@/assets/scss/breakpoints.scss";

.content {
  margin-top: 1rem;
  padding: 0 1rem;
  flex: 1;

  &.contentEmpty {
    margin-top: 6rem;
  }
}

.table {
  width: 100%;
  border-radius: 0.25rem;
  border-collapse: collapse;

  th {
    text-align: left;
  }

  > thead {
    display: none;

    @include sm {
      display: initial;
    }
  }
}

.tableHeadCell {
  color: var(--gray-dark);
  font-size: 0.8125rem;
}

.tableRow {
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-template-areas:
    "avatar actions actions"
    "avatar name name"
    "avatar email email"
    "avatar phone phone";
  gap: 0.5rem 1rem;
  align-items: center;
  color: var(--text-color);
  padding: 0.75rem 0.5rem;
  background-color: var(--white);
  transition: background-color 0.2s ease-in-out;
  margin: 1rem 0;
  box-shadow: 0 0 3px #ccc;

  @include sm {
    margin: 0;
    border: 1px solid var(--gray-light);
    gap: 1rem;
    grid-template-columns: 24px repeat(4, minmax(0, 1fr));
    grid-template-areas: "avatar name email phone actions";
  }

  > td {
    word-break: break-word;

    &:nth-of-type(1) { grid-area: avatar; }
    &:nth-of-type(2) { grid-area: name; }
    &:nth-of-type(3) { grid-area: email; }
    &:nth-of-type(4) { grid-area: phone; }
    &:nth-of-type(5) { grid-area: actions; }
  }
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
</style>
