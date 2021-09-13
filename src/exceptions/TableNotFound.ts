export class TableNotFound extends Error {
  constructor(tableName: string) {
    super(`Table ${tableName} not found`);

    this.name = 'TableNotFound';
  }
}
