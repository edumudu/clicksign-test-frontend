import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Contact } from '@/types/contact';
import {
  createTable,
  insertInTable,
  deleteInTable,
  fetchDataInTable,
  updateInTable,
} from '@/database';

export type CreateDto = Omit<Contact, 'id' | 'avatar'>;
export type UpdateDto = CreateDto;

export const ContactTableName = 'contacts';

const contacts = ref<Contact[]>([]);

export const useContacts = () => {
  const route = useRoute();
  const router = useRouter();

  createTable(ContactTableName);

  const fetchContacts = (): Contact[] => {
    contacts.value = fetchDataInTable(ContactTableName);

    return contacts.value;
  };

  const createContact = (contact: CreateDto): Contact => {
    const newContact = insertInTable(ContactTableName, contact);

    contacts.value = [...contacts.value, newContact];

    return newContact;
  };

  const updateContact = (id: number, contact: UpdateDto) => {
    updateInTable(ContactTableName, id, contact);
    fetchContacts();
  };

  const deleteContact = (id: number) => {
    deleteInTable(ContactTableName, id);
    fetchContacts();
  };

  const findContact = (id: number): Contact | null => {
    const contact = contacts.value.find((item) => item.id === id);

    return contact ? { ...contact } : null;
  };

  const searchString = computed<string>({
    get: () => (Array.isArray(route.query.search) ? route.query.search[0] || '' : route.query.search || ''),

    set(value: string) {
      router.push({ query: { search: value } });
    },
  });

  const searchedContacts = computed(() => contacts.value.filter(({ name }) => (
    name.toLowerCase().includes(searchString.value.toLowerCase())
  )));

  const hasContact = computed(() => contacts.value.length > 0);
  const hasSearchedContact = computed(() => searchedContacts.value.length > 0);

  return {
    contacts,
    fetchContacts,
    createContact,
    updateContact,
    deleteContact,
    findContact,
    hasContact,
    searchString,
    searchedContacts,
    hasSearchedContact,
  };
};
