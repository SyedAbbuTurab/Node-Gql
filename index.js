import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'


const server = new ApolloServer({});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 }
});

console.log("Server running at port:", 8000);

