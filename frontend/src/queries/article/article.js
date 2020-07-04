import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
      Title
      URL
      id
      category {
        id
        Title
        
      }
    }
  }
`;

export default ARTICLE_QUERY;


