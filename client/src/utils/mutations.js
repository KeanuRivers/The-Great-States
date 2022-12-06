import { gql } from '@apollo/client';

export const RENDER_MYTH = gql`
    mutation renderState:($mythState: 
        State: $mythState, name: mythText)`