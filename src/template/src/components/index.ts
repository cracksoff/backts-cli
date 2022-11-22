import { gotScraping as got } from 'got-scraping'
import { db } from '../utils/index.js'
import logger from '../utils/log.js'
import type { MyIpRequestResponse } from './index.types.js'
import * as queries from './index.queries.js' // this file is hidden in vscode settings (exclude **/*.queries.ts)

export async function myIpRequest() {
	const { ip } = await got<MyIpRequestResponse>({
		url: 'https://api.ipify.org?format=json',
		responseType: 'json',
		resolveBodyOnly: true,
	})

	return ip
}

export async function getItemFromDb() {
	try {
		const [item] = await queries.getLastItem.run({ status: 'created' }, db)

		return item
	} catch (error: unknown) {
		if (error instanceof Error) {
			logger.error(error.message)
		} else logger.error(error)
	}
}
