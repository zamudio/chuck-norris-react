import React from "react";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
`;

const Jokes = ({ jokes }) => {
  return (
    <div className="container">
      <div className="col-sm-12 mt-5 mb-5 pr-5 pl-5">
        <Card className="card text-center mx-auto">
          <div className="card-header">
            <h4 style={{ textAlign: "center" }}>{"Chuck Norris Jokes"}</h4>
          </div>
          <div className="card-body">
            <img
              src={jokes.icon_url}
              alt="Chuck Norris"
              className="img-thumbnail"
            />
            <p className="card-text">{jokes.value}</p>
            <a href="." className="btn btn-primary">
              New joke?
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Jokes;
