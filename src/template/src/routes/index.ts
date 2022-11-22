import { fastify, type FastifyRequest, type FastifyReply } from 'fastify'
import logger from '../utils/log.js'
import { myIpRequest } from '../components/index.js'
import { test } from '../index.js'

export const server = fastify()

server.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
	try {
		const { key } = request.query as { key: string }

		logger.info({
			name: 'API',
			message: 'received request',
			key,
			test: { foo: 'bar' },
		})

		if (!key) {
			return await reply.status(400).send({ error: 'Missing key' })
		}

		const ip = await myIpRequest()

		logger.info({
			name: 'API',
			message: 'request completed',
			ip,
		})

		await reply.send({ success: true, ip })
	} catch (error: unknown) {
		if (error instanceof Error) {
			logger.error({
				name: 'API',
				message: 'request failed',
				error: error.message,
			})

			await reply.status(500).send({ success: false, error: error.message })
		} else {
			await reply.status(500).send({ success: false })
		}
	}
})

server.get('/test', async (request: FastifyRequest, reply: FastifyReply) => {
	try {
		await reply.send({ success: true, test: test.get('foo') })
	} catch (error: unknown) {
		if (error instanceof Error) {
			logger.error(error.message)
			return reply.status(500).send({ success: false, error: error.message })
		}

		await reply.status(500).send({ success: false })
	}
})
