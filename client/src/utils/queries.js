import { gql } from '@apollo/client';

export const QUERY_MYTH = gql`
    query myth{
        myths {
            _id
            name
            mythText
            mythState
        }
    }`;
