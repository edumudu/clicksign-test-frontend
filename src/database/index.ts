import { TableNotFound } from '@/exceptions/TableNotFound';

export const createTable = (tableName: string) => {
  if (localStorage.getItem(tableName)) return;

  localStorage.setItem(tableName, JSON.stringify([]));
};

export const fetchDataInTable = (tableName: string): any[] => {
  const data = localStorage.getItem(tableName);

  if (!data) throw new TableNotFound(tableName);

  return JSON.parse(data);
};

export const insertInTable = (tableName: string, data: any) => {
  const dataInTable = fetchDataInTable(tableName);
  const lastItem = dataInTable[dataInTable.length - 1];
  const newData = {
    ...data,
    id: lastItem ? lastItem.id + 1 : 1,
  };

  localStorage.setItem(tableName, JSON.stringify([
    ...dataInTable,
    newData,
  ]));

  return newData;
};

export const updateInTable = (tableName: string, id: number, data: any) => {
  const dataInTable = fetchDataInTable(tableName);
  const newData = dataInTable.map((item: any) => (item.id === id ? { ...item, ...data } : item));

  localStorage.setItem(tableName, JSON.stringify(newData));
};

export const deleteInTable = (tableName: string, id: number) => {
  const dataInTable = fetchDataInTable(tableName);
  const newData = dataInTable.filter((item: any) => item.id !== id);

  localStorage.setItem(tableName, JSON.stringify(newData));
};
