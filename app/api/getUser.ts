import { gql } from '@apollo/client';

export const GET_USER = gql`
  query MyProfile {
    myProfile {
      name
      avatar
    }
  }
`;
