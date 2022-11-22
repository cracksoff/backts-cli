/** Types generated for queries found in "src/components/index.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetLastItem' parameters type */
export interface IGetLastItemParams {
  status: string;
}

/** 'GetLastItem' return type */
export interface IGetLastItemResult {
  id: number;
  name: string | null;
}

/** 'GetLastItem' query type */
export interface IGetLastItemQuery {
  params: IGetLastItemParams;
  result: IGetLastItemResult;
}

const getLastItemIR: any = {"usedParamSet":{"status":true},"params":[{"name":"status","required":true,"transform":{"type":"scalar"},"locs":[{"a":45,"b":52}]}],"statement":"SELECT\n\tid,\n\tname\nFROM items\nWHERE\n\tstatus = :status!\nORDER BY id DESC\nLIMIT 1"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	id,
 * 	name
 * FROM items
 * WHERE
 * 	status = :status!
 * ORDER BY id DESC
 * LIMIT 1
 * ```
 */
export const getLastItem = new PreparedQuery<IGetLastItemParams,IGetLastItemResult>(getLastItemIR);


