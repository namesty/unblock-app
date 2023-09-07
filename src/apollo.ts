import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
  ServerError,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GRAPHQL_API_URL } from "./constants";
import { useUserStore } from "./stores/userStore";

const httpLink = createHttpLink({
  uri: GRAPHQL_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const userStoreState = useUserStore.getState();
  let bearerToken = userStoreState.magicDIDToken;

  return {
    headers: {
      ...headers,
      authorization: bearerToken ? `Bearer ${bearerToken}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
