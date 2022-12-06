import { gql } from '@apollo/client';

export const QUERY_MYTH = gql`
    query myth{
        myth {
            _id
            name
            mythText
            mythState
        }
    }`;
