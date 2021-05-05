import { ApolloClient, InMemoryCache, createHttpLink  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const URI = 'https://api.github.com/graphql';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API;

const httpLink = createHttpLink({
    uri: URI,
});

const authApolloLink = setContext((_, { headers }) => ({
    headers: {
        ...headers,
        authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : '',
    }
}));

export const CLIENT = new ApolloClient({
    cache: new InMemoryCache(),
    link: authApolloLink.concat(httpLink),
});

export const TOKEN = GITHUB_TOKEN