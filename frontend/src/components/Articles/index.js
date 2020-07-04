import React from "react";
import { Link } from "react-router-dom";

function Articles({ articles }) {
  return (
    <div className="d-flex">
      {articles.map((article) => {
        
        return (
          <div className="card" style={{ width: "18rem" }} key={article.id}>
            
            <div className="card-body">
              <h5 className="card-title">{article.Title}</h5>
              <Link to={`/article/${article.id}`} className="btn btn-primary">
                Go Main Page
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;