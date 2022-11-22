/** Types generated for queries found in "src/controllers/purchases.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'GetOrders' parameters type */
export interface IGetOrdersParams {
  statuses: readonly (string)[];
}

/** 'GetOrders' return type */
export interface IGetOrdersResult {
  amount: number;
  id: number;
  item: string;
  project: number;
  steamid: string;
  tradelink: string;
}

/** 'GetOrders' query type */
export interface IGetOrdersQuery {
  params: IGetOrdersParams;
  result: IGetOrdersResult;
}

const getOrdersIR: any = {"usedParamSet":{"statuses":true},"params":[{"name":"statuses","required":true,"transform":{"type":"array_spread"},"locs":[{"a":94,"b":103}]}],"statement":"SELECT\n\tid,\n\tsteamid,\n\ttradelink,\n\tamount::float,\n\titem,\n\tproject\nFROM orders\nWHERE status IN :statuses!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	id,
 * 	steamid,
 * 	tradelink,
 * 	amount::float,
 * 	item,
 * 	project
 * FROM orders
 * WHERE status IN :statuses!
 * ```
 */
export const getOrders = new PreparedQuery<IGetOrdersParams,IGetOrdersResult>(getOrdersIR);


/** 'CreatePurchase' parameters type */
export interface ICreatePurchaseParams {
  orderId: number;
}

/** 'CreatePurchase' return type */
export interface ICreatePurchaseResult {
  id: number;
}

/** 'CreatePurchase' query type */
export interface ICreatePurchaseQuery {
  params: ICreatePurchaseParams;
  result: ICreatePurchaseResult;
}

const createPurchaseIR: any = {"usedParamSet":{"orderId":true},"params":[{"name":"orderId","required":true,"transform":{"type":"scalar"},"locs":[{"a":45,"b":53}]}],"statement":"INSERT INTO purchases (\n\torderid\n)\nVALUES (\n\t:orderId!\n)\nRETURNING id"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO purchases (
 * 	orderid
 * )
 * VALUES (
 * 	:orderId!
 * )
 * RETURNING id
 * ```
 */
export const createPurchase = new PreparedQuery<ICreatePurchaseParams,ICreatePurchaseResult>(createPurchaseIR);


/** 'GetPurchasesCount' parameters type */
export interface IGetPurchasesCountParams {
  orderId: number;
}

/** 'GetPurchasesCount' return type */
export interface IGetPurchasesCountResult {
  count: number;
}

/** 'GetPurchasesCount' query type */
export interface IGetPurchasesCountQuery {
  params: IGetPurchasesCountParams;
  result: IGetPurchasesCountResult;
}

const getPurchasesCountIR: any = {"usedParamSet":{"orderId":true},"params":[{"name":"orderId","required":true,"transform":{"type":"scalar"},"locs":[{"a":65,"b":73}]}],"statement":"SELECT\n\tCOUNT(*)::int as \"count!\"\nFROM purchases\nWHERE orderid = :orderId!\n\tAND failed = false"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	COUNT(*)::int as "count!"
 * FROM purchases
 * WHERE orderid = :orderId!
 * 	AND failed = false
 * ```
 */
export const getPurchasesCount = new PreparedQuery<IGetPurchasesCountParams,IGetPurchasesCountResult>(getPurchasesCountIR);


/** 'GetRetriesCount' parameters type */
export interface IGetRetriesCountParams {
  orderId: number;
}

/** 'GetRetriesCount' return type */
export interface IGetRetriesCountResult {
  count: number;
}

/** 'GetRetriesCount' query type */
export interface IGetRetriesCountQuery {
  params: IGetRetriesCountParams;
  result: IGetRetriesCountResult;
}

const getRetriesCountIR: any = {"usedParamSet":{"orderId":true},"params":[{"name":"orderId","required":true,"transform":{"type":"scalar"},"locs":[{"a":65,"b":73}]}],"statement":"SELECT\n\tCOUNT(*)::int as \"count!\"\nFROM purchases\nWHERE orderid = :orderId!\n\tAND failed = true"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	COUNT(*)::int as "count!"
 * FROM purchases
 * WHERE orderid = :orderId!
 * 	AND failed = true
 * ```
 */
export const getRetriesCount = new PreparedQuery<IGetRetriesCountParams,IGetRetriesCountResult>(getRetriesCountIR);


/** 'GetFirstPurchaseCreated' parameters type */
export interface IGetFirstPurchaseCreatedParams {
  orderId: number;
}

/** 'GetFirstPurchaseCreated' return type */
export interface IGetFirstPurchaseCreatedResult {
  firstCreated: number | null;
}

/** 'GetFirstPurchaseCreated' query type */
export interface IGetFirstPurchaseCreatedQuery {
  params: IGetFirstPurchaseCreatedParams;
  result: IGetFirstPurchaseCreatedResult;
}

const getFirstPurchaseCreatedIR: any = {"usedParamSet":{"orderId":true},"params":[{"name":"orderId","required":true,"transform":{"type":"scalar"},"locs":[{"a":90,"b":98}]}],"statement":"SELECT\n\tEXTRACT(EPOCH FROM created)::int as \"firstCreated\"\nFROM purchases\nWHERE orderid = :orderId!\nORDER BY id ASC\nLIMIT 1"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	EXTRACT(EPOCH FROM created)::int as "firstCreated"
 * FROM purchases
 * WHERE orderid = :orderId!
 * ORDER BY id ASC
 * LIMIT 1
 * ```
 */
export const getFirstPurchaseCreated = new PreparedQuery<IGetFirstPurchaseCreatedParams,IGetFirstPurchaseCreatedResult>(getFirstPurchaseCreatedIR);


/** 'GetItemsFromRetries' parameters type */
export interface IGetItemsFromRetriesParams {
  orderId: number;
}

/** 'GetItemsFromRetries' return type */
export interface IGetItemsFromRetriesResult {
  marketid: string | null;
}

/** 'GetItemsFromRetries' query type */
export interface IGetItemsFromRetriesQuery {
  params: IGetItemsFromRetriesParams;
  result: IGetItemsFromRetriesResult;
}

const getItemsFromRetriesIR: any = {"usedParamSet":{"orderId":true},"params":[{"name":"orderId","required":true,"transform":{"type":"scalar"},"locs":[{"a":47,"b":55}]}],"statement":"SELECT marketid\nFROM purchases\nWHERE orderid = :orderId!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT marketid
 * FROM purchases
 * WHERE orderid = :orderId!
 * ```
 */
export const getItemsFromRetries = new PreparedQuery<IGetItemsFromRetriesParams,IGetItemsFromRetriesResult>(getItemsFromRetriesIR);


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


/** 'UpdatePurchase' parameters type */
export interface IUpdatePurchaseParams {
  id: number;
  market: string;
  marketid: string;
  price: number;
}

/** 'UpdatePurchase' return type */
export type IUpdatePurchaseResult = void;

/** 'UpdatePurchase' query type */
export interface IUpdatePurchaseQuery {
  params: IUpdatePurchaseParams;
  result: IUpdatePurchaseResult;
}

const updatePurchaseIR: any = {"usedParamSet":{"market":true,"marketid":true,"price":true,"id":true},"params":[{"name":"market","required":true,"transform":{"type":"scalar"},"locs":[{"a":32,"b":39}]},{"name":"marketid","required":true,"transform":{"type":"scalar"},"locs":[{"a":54,"b":63}]},{"name":"price","required":true,"transform":{"type":"scalar"},"locs":[{"a":75,"b":81}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":94,"b":97}]}],"statement":"UPDATE purchases \n\tSET market = :market!,\n\tmarketid = :marketid!,\n\tprice = :price!\nWHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE purchases 
 * 	SET market = :market!,
 * 	marketid = :marketid!,
 * 	price = :price!
 * WHERE id = :id!
 * ```
 */
export const updatePurchase = new PreparedQuery<IUpdatePurchaseParams,IUpdatePurchaseResult>(updatePurchaseIR);


/** 'UpdateOrderStatus' parameters type */
export interface IUpdateOrderStatusParams {
  id: number;
  status: string;
}

/** 'UpdateOrderStatus' return type */
export type IUpdateOrderStatusResult = void;

/** 'UpdateOrderStatus' query type */
export interface IUpdateOrderStatusQuery {
  params: IUpdateOrderStatusParams;
  result: IUpdateOrderStatusResult;
}

const updateOrderStatusIR: any = {"usedParamSet":{"status":true,"id":true},"params":[{"name":"status","required":true,"transform":{"type":"scalar"},"locs":[{"a":28,"b":35}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":48,"b":51}]}],"statement":"UPDATE orders\n\tSET status = :status!\nWHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE orders
 * 	SET status = :status!
 * WHERE id = :id!
 * ```
 */
export const updateOrderStatus = new PreparedQuery<IUpdateOrderStatusParams,IUpdateOrderStatusResult>(updateOrderStatusIR);


/** 'UpdatePurchaseStatus' parameters type */
export interface IUpdatePurchaseStatusParams {
  id: number;
  status: string;
}

/** 'UpdatePurchaseStatus' return type */
export type IUpdatePurchaseStatusResult = void;

/** 'UpdatePurchaseStatus' query type */
export interface IUpdatePurchaseStatusQuery {
  params: IUpdatePurchaseStatusParams;
  result: IUpdatePurchaseStatusResult;
}

const updatePurchaseStatusIR: any = {"usedParamSet":{"status":true,"id":true},"params":[{"name":"status","required":true,"transform":{"type":"scalar"},"locs":[{"a":31,"b":38}]},{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":51,"b":54}]}],"statement":"UPDATE purchases\n\tSET status = :status!\nWHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * UPDATE purchases
 * 	SET status = :status!
 * WHERE id = :id!
 * ```
 */
export const updatePurchaseStatus = new PreparedQuery<IUpdatePurchaseStatusParams,IUpdatePurchaseStatusResult>(updatePurchaseStatusIR);


