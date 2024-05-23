import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { unitResolver } from '@repo/unit'

import { typeDefs } from '@/utils/loadGraphqlSchemas.js'

const server = new ApolloServer({
	typeDefs,
	resolvers: unitResolver,
})

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
})

console.log(`🚀 Server ready at: ${url}`)
