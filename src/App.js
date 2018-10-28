import React from 'react';
import { Row, Col } from 'reactstrap'
import List from "./components/List"
import Form from "./components/Form"
// ========================================

export default class App extends React.Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
    );
  }
}

