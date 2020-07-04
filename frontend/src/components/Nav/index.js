import React from "react";
import { Link } from "react-router-dom";

import Query from "../Query";

import CATEGORIES_QUERY from "../../queries/category/categories";

function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Query query={CATEGORIES_QUERY} id={null}>
              {({ data: { categories } }) => {
                return categories.map((cat) => {
                  return (
                    <li className="nav-item active" key={cat.id}>
                      <Link className="nav-link" to={`/category/${cat.id}`}>
                        {cat.Title}
                      </Link>
                    </li>
                  );
                });
              }}
            </Query>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;