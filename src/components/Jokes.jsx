import React from "react";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  ${"" /* &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25), 0 10px 15px rgba(0, 0, 0, 0.22);
  } */}
`;

const Jokes = ({ jokes }) => {
  return (
    <div className="col-sm-12 mb-5">
      <div className="card-header">
        <h4 style={{ textAlign: "center" }}>{"Chuck Norris Jokes"}</h4>
      </div>
      <Card className="card text-center">
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
  );
};

export default Jokes;
