import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      URL
      Title
      
      id
      category{
        id
        Title
      }
    }
  }
`;

export default ARTICLES_QUERY;