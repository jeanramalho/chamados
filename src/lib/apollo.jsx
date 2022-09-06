import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl6aycg090i2k01umeyl23b40/master',
    cache: new InMemoryCache()

})