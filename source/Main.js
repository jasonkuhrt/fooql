"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GQLImport = __importStar(require("graphql-import"));
const graphql_yoga_1 = require("graphql-yoga");
const typeDefs = GQLImport.importSchema(__dirname + "/schema.graphql");
const resolvers = {
    Query: {
        hello: () => {
            return "";
        },
    },
};
const server = new graphql_yoga_1.GraphQLServer({ typeDefs, resolvers });
server.start().then(server => {
    console.log("started server at %s", server.address());
});
//# sourceMappingURL=Main.js.map