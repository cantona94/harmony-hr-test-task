import { getTokenFromLocalStorage } from '@/app/helpers/localStorage.helper';
import { ApolloLink } from '@apollo/client';

export const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getTokenFromLocalStorage('access_token');

  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return forward(operation);
});
