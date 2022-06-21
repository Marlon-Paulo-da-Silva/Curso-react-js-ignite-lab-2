import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9z89t1hu101xm1zoyg6hy/master',
  cache: new InMemoryCache()
})