import React from "react";
import { useParams, Link } from "react-router-dom";
import Query from "../../components/Query";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import ARTICLE_QUERY from "../../queries/article/article";


function Home(props) {
  let { id } = useParams();
  return (
    

      <Query query={ARTICLE_QUERY} id={id}>
        {({ data: { article } }) => {
          
          return (
            <div className="d-flex flex-row justify-content-center">
              <div className="card" key={article.id}>
                
                <div className="card-body">
                  <main>
                    <h5 className="card-title">{article.Title}</h5>
                    <p>
                      

                      <span className="badge badge-primary" style={{ background: "red"}}>
                        {article.category ? article.category.Title : ""}
                      </span>
                    </p>
                    <a className="btn btn-primary" href={article.URL} target="blank" >Show me Pics</a>
                    <br></br>
                    <br></br>
                    
                    <Link to={`/`} className="btn btn-primary">
                      back
                    </Link>
                  </main>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    
  );
}

export default Home;