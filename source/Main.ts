import * as GQLImport from "graphql-import"
import * as Yoga from "graphql-yoga"
import * as S from "./SchemaTypes"

const typeDefs = GQLImport.importSchema(__dirname + "/schema.graphql")

const resolvers = {
  Query: {
    hello: (_: any, args: S.HelloQueryArgs) => {
      if (args.name) {
        return args.name.length
      } else {
        return "someone..."
      }
    },
  },
}

const server = new Yoga.GraphQLServer({ typeDefs, resolvers })

server.start().then(server => {
  console.log("started server at %s", JSON.stringify(server.address()))
})
