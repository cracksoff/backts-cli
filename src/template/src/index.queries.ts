/** Types generated for queries found in "src/index.sql" */
import { PreparedQuery } from '@pgtyped/query';

export type Json = null | boolean | number | string | Json[] | { [key: string]: Json };

/** 'GetProjects' parameters type */
export type IGetProjectsParams = void;

/** 'GetProjects' return type */
export interface IGetProjectsResult {
  apikey: string;
  config: Json | null;
  id: number;
}

/** 'GetProjects' query type */
export interface IGetProjectsQuery {
  params: IGetProjectsParams;
  result: IGetProjectsResult;
}

const getProjectsIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT\n\tid,\n\tapikey,\n\tconfig\nFROM projects"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	id,
 * 	apikey,
 * 	config
 * FROM projects
 * ```
 */
export const getProjects = new PreparedQuery<IGetProjectsParams,IGetProjectsResult>(getProjectsIR);


/** 'GetConfigs' parameters type */
export type IGetConfigsParams = void;

/** 'GetConfigs' return type */
export interface IGetConfigsResult {
  global: Json;
}

/** 'GetConfigs' query type */
export interface IGetConfigsQuery {
  params: IGetConfigsParams;
  result: IGetConfigsResult;
}

const getConfigsIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT\n\tglobal\nFROM configs"};

/**
 * Query generated from SQL:
 * ```
 * SELECT
 * 	global
 * FROM configs
 * ```
 */
export const getConfigs = new PreparedQuery<IGetConfigsParams,IGetConfigsResult>(getConfigsIR);


