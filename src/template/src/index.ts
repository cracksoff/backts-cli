import process from 'node:process'
import { server } from './routes/index.js'
import logger from './utils/log.js'
import { getItemFromDb } from './components/index.js'

await server.listen({
	port: Number(process.env.SERVER_PORT ?? 8080),
	host: '0.0.0.0',
})

logger.info({
	message: 'server started',
	port: Number(process.env.SERVER_PORT ?? 8080),
})

type Test = Record<
	string,
	{
		foo: string
	}
>

export const test = new Map<string, Test>()

test.set('foo', {
	fooBar: {
		foo: 'bar',
	},
})

console.log(test)
logger.warn({ data: Object.fromEntries(test) })

const item = await getItemFromDb()
if (item) {
	logger.info(item.name)
}
