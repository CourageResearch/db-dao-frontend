import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/graphql-ybxbk/graphql",    
    uri: "http://localhost:8000/graphql",    
    cache: new InMemoryCache(),
    // headers: {
    //     email: `kuratedao@gmail.com`,
    //     password: `asdfasdf`,
    // }
});

export default client;