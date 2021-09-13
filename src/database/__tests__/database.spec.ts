import { TableNotFound } from '@/exceptions/TableNotFound';
import {
  createTable,
  deleteInTable,
  fetchDataInTable,
  insertInTable,
  updateInTable,
} from '..';

const getItem = (key: string) => JSON.parse(localStorage.getItem(key) || '[]');

describe('Database', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('createTable', () => {
    it('Should create a table with empty array', async () => {
      const tableName = 'test';

      createTable(tableName);

      expect(localStorage.getItem(tableName)).toBe('[]');
    });

    it('Should not overwrite a table if already exists', async () => {
      const tableName = 'test';

      localStorage.setItem(tableName, '["value"]');
      createTable(tableName);

      expect(localStorage.getItem(tableName)).toBe('["value"]');
    });
  });

  describe('insertInTable', () => {
    const tableName = 'test';

    beforeEach(() => {
      localStorage.setItem(tableName, '[]');
    });

    it('Should insert value in table', async () => {
      insertInTable(tableName, { id: 1, name: 'Jonh' });

      expect(getItem(tableName)).toMatchObject([{ id: 1, name: 'Jonh' }]);
    });

    it('Should not overwrite previus iems in a table', async () => {
      localStorage.setItem(tableName, JSON.stringify([{ id: 1, name: 'Edu' }]));

      insertInTable(tableName, { id: 2, name: 'Marcelo' });

      expect(getItem(tableName)).toMatchObject([
        { id: 1, name: 'Edu' },
        { id: 2, name: 'Marcelo' },
      ]);
    });

    it('Should always auto increase the id', async () => {
      localStorage.setItem(tableName, JSON.stringify([{ id: 1, name: 'Edu' }]));

      insertInTable(tableName, { name: 'Marcelo' });

      expect(getItem(tableName)).toMatchObject([
        { id: 1, name: 'Edu' },
        { id: 2, name: 'Marcelo' },
      ]);
    });

    it('Should assing id "1" when is the first item', async () => {
      insertInTable(tableName, { name: 'Marcelo' });

      expect(getItem(tableName)).toMatchObject([
        { id: 1, name: 'Marcelo' },
      ]);
    });
  });

  describe('fetchDataInTable', () => {
    const tableName = 'test';

    it('Should fetch data in table', () => {
      const data = [
        { id: 1, name: 'Edu' },
        { id: 2, name: 'Wesley' },
        { id: 3, name: 'Alex' },
      ];

      localStorage.setItem(tableName, JSON.stringify(data));

      expect(fetchDataInTable(tableName)).toMatchObject(data);
    });

    it('Should thorw an error if table not exists', () => {
      expect(() => fetchDataInTable(tableName)).toThrow(TableNotFound);
    });
  });

  describe('deleteInTable', () => {
    const tableName = 'test';

    it('Should delete record in table by id', () => {
      const data = [
        { id: 1, name: 'Edu' },
        { id: 2, name: 'Wesley' },
        { id: 3, name: 'Alex' },
      ];

      localStorage.setItem(tableName, JSON.stringify(data));

      deleteInTable(tableName, 1);

      expect(getItem(tableName)).toMatchObject(data.slice(1));
    });

    it('Should thorw an error if table not exists', () => {
      expect(() => deleteInTable(tableName, 1)).toThrow(TableNotFound);
    });
  });

  describe('updateInTable', () => {
    const tableName = 'test';

    it('Should update record in table by id', () => {
      const data = [
        { id: 1, name: 'Edu' },
        { id: 2, name: 'Wesley' },
        { id: 3, name: 'Alex' },
      ];

      localStorage.setItem(tableName, JSON.stringify(data));

      updateInTable(tableName, 1, { name: 'Eduardo' });

      data[0].name = 'Eduardo';

      expect(getItem(tableName)).toMatchObject(data);
    });

    it('Should thorw an error if table not exists', () => {
      expect(() => updateInTable(tableName, 1, {})).toThrow(TableNotFound);
    });
  });
});
