import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      Title
      id
      
    }
  }
`;

export default CATEGORIES_QUERY;