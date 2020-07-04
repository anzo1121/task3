import React from "react";
import { useParams } from "react-router-dom";
import Article from "../../components/Articles";
import Query from "../../components/Query";

import ARTICLES_QUERY from "../../queries/article/articles";

function Home(props) {
  let { id } = useParams();
  console.log(id);
  return (
    
      <div className="d-flex flex-row">
        <Query query={ARTICLES_QUERY} id={id}>
          {({ data: { articles } }) => {
            return <Article articles={articles} />;
          }}
        </Query>
      </div>
    
  );
}

export default Home;