import { Contact } from '@/types/contact';
import {
  insertInTable,
  deleteInTable,
  fetchDataInTable,
  updateInTable,
} from '@/database';

export type CreateDto = Omit<Contact, 'id' | 'avatar'>;
export type UpdateDto = CreateDto;

export const ContactTableName = 'contacts';

const fetchContacts = (): Contact[] => fetchDataInTable(ContactTableName);
const createContact = (contact: CreateDto): Contact => insertInTable(ContactTableName, contact);

const updateContact = (id: number, contact: UpdateDto) => {
  updateInTable(ContactTableName, id, contact);
};

const deleteContact = (id: number) => {
  deleteInTable(ContactTableName, id);
};

const findContact = (id: number): Contact | null => {
  const contacts = fetchDataInTable(ContactTableName);

  return contacts.find((contact) => contact.id === id);
};

export const useContacts = () => ({
  fetchContacts,
  createContact,
  updateContact,
  deleteContact,
  findContact,
});
