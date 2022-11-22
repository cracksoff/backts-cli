/** Types generated for queries found in "src/controllers/processing.sql" */
import { PreparedQuery } from '@pgtyped/query';

export type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

/** 'GetPurchases' parameters type */
export interface IGetPurchasesParams {
  failed: boolean;
  statuses: readonly (string)[];
}

/** 'GetPurchases' return type */
export interface IGetPurchasesResult {
  id: number;
  orderid: number;
  project: number;
  status: string;
}

/** 'GetPurchases' query type */
export interface IGetPurchasesQuery {
  params: IGetPurchasesParams;
  result: IGetPurchasesResult;
}

const getPurchasesIR: any = {"usedParamSet":{"failed":true,"statuses":true},"params":[{"name":"statuses","required":true,"transform":{"type":"array_spread"},"locs":[{"a":201,"b":210}]},{"name":"failed","required":true,"transform":{"type":"scalar"},"locs":[{"a":167,"b":174}]}],"statement":"SELECT\n\tpurchases.id,\n\tpurchases.orderid,\n\tpurchases.status,\n\torders.project\nFROM purchases\nLEFT JOIN orders ON purchases.orderid = orders.id\nWHERE purchases.failed = :failed!\n\tAND purchases.status IN :statuses!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	purchases.id,
 * 	purchases.orderid,
 * 	purchases.status,
 * 	orders.project
 * FROM purchases
 * LEFT JOIN orders ON purchases.orderid = orders.id
 * WHERE purchases.failed = :failed!
 * 	AND purchases.status IN :statuses!
 * ```
 */
export const getPurchases = new PreparedQuery<IGetPurchasesParams,IGetPurchasesResult>(getPurchasesIR);


/** 'UpdatePurchase' parameters type */
export interface IUpdatePurchaseParams {
  id: number;
  sender: Json;
}

/** 'UpdatePurchase' return type */
export type IUpdatePurchaseResult = void;

/** 'UpdatePurchase' query type */
export interface IUpdatePurchaseQuery {
  params: IUpdatePurchaseParams;
  result: IUpdatePurchaseResult;
}

const updatePurchaseIR: any = {"usedParamSet":{"sender":true,"id":true},"params":[{"name":"sender","required":true,"transform":{"type":"scalar"},"locs":[{"a":50,"b":57}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":70,"b":73}]}],"statement":"UPDATE purchases \n\tSET status = 'sent',\n\tsender = :sender!\nWHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE purchases 
 * 	SET status = 'sent',
 * 	sender = :sender!
 * WHERE id = :id!
 * ```
 */
export const updatePurchase = new PreparedQuery<IUpdatePurchaseParams,IUpdatePurchaseResult>(updatePurchaseIR);


/** 'FinishPurchase' parameters type */
export interface IFinishPurchaseParams {
  id: number;
}

/** 'FinishPurchase' return type */
export type IFinishPurchaseResult = void;

/** 'FinishPurchase' query type */
export interface IFinishPurchaseQuery {
  params: IFinishPurchaseParams;
  result: IFinishPurchaseResult;
}

const finishPurchaseIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":54,"b":57}]}],"statement":"UPDATE purchases \n\tSET status = 'finished'\nWHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE purchases 
 * 	SET status = 'finished'
 * WHERE id = :id!
 * ```
 */
export const finishPurchase = new PreparedQuery<IFinishPurchaseParams,IFinishPurchaseResult>(finishPurchaseIR);


/** 'FinishOrder' parameters type */
export interface IFinishOrderParams {
  id: number;
}

/** 'FinishOrder' return type */
export type IFinishOrderResult = void;

/** 'FinishOrder' query type */
export interface IFinishOrderQuery {
  params: IFinishOrderParams;
  result: IFinishOrderResult;
}

const finishOrderIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":51,"b":54}]}],"statement":"UPDATE orders \n\tSET status = 'finished'\nWHERE id = :id!                                                                                                                          "};

/**
 * Query generated from SQL:
 * ```
 * UPDATE orders 
 * 	SET status = 'finished'
 * WHERE id = :id!                                                                                                                          
 * ```
 */
export const finishOrder = new PreparedQuery<IFinishOrderParams,IFinishOrderResult>(finishOrderIR);


/** 'SetPurchaseFailed' parameters type */
export interface ISetPurchaseFailedParams {
  error: string;
  id: number;
}

/** 'SetPurchaseFailed' return type */
export type ISetPurchaseFailedResult = void;

/** 'SetPurchaseFailed' query type */
export interface ISetPurchaseFailedQuery {
  params: ISetPurchaseFailedParams;
  result: ISetPurchaseFailedResult;
}

const setPurchaseFailedIR: any = {"usedParamSet":{"error":true,"id":true},"params":[{"name":"error","required":true,"transform":{"type":"scalar"},"locs":[{"a":67,"b":73}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":86,"b":89}]}],"statement":"UPDATE purchases \n\tSET status = 'failed',\n\tfailed = true,\n\terror = :error!\nWHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE purchases 
 * 	SET status = 'failed',
 * 	failed = true,
 * 	error = :error!
 * WHERE id = :id!
 * ```
 */
export const setPurchaseFailed = new PreparedQuery<ISetPurchaseFailedParams,ISetPurchaseFailedResult>(setPurchaseFailedIR);


