import { config } from '../config';
import sql from 'mssql/msnodesqlv8';

export const retreive = async (
  query: string
): Promise<sql.IRecordSet<any> | undefined> => {
  try {
    const conn = await new sql.ConnectionPool(config).connect();
    const result = await conn.request().query(query);

    return result.recordsets[0];
  } catch (err) {
    throw err;
  }
};
