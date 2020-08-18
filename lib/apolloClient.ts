import {InMemoryCache, ApolloClient, HttpLink, NormalizedCacheObject} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => (
    new ApolloClient({
        link: new HttpLink({
            uri: '/api/graphql'
        }),
        cache: new InMemoryCache()
    })
)

const initApollo = () => {
    apolloClient = apolloClient ?? createApolloClient();
    return apolloClient;
}

export const useApollo = () => initApollo();