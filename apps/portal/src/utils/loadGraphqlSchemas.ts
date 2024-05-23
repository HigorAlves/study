import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchema } from '@graphql-tools/load'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootPath = '../../../../**/*.graphql'

const schemaPath =
	process.env.NODE_ENV === 'production'
		? path.join(__dirname, '**/*.graphql')
		: path.join(__dirname, rootPath)

export const typeDefs = await loadSchema(schemaPath, {
	loaders: [new GraphQLFileLoader()],
})
