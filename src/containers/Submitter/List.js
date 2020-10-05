import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

var divStyle = {
  margin: "8% 8%",
};

class List extends Component {
  componentDidMount = () => {
    this.getList();
  };

  constructor(props) {
    super(props);

    this.state = {
      search: [],
    };
  }
  componentDidMount = () => {
    this.getList();
  };

  getList() {
    axios
      .get(
        "http://sdm-project-submit.herokuapp.com/seersearch"
      ) /*http://localhost:8080/seersearch */
      .then((response) => {
        console.log(response);
        this.setState({
          search: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { search } = this.state;
    return (
      <div style={divStyle}>
        <Table responsive>
          <thead>
            <tr>
              <th>No.</th>
              <th>title</th>
              <th>datePublished</th>
              <th>Keywords</th>
              <th>Abstract</th>
              <th>Database Source</th>
            </tr>
          </thead>
          <tbody>
            {search &&
              search.map((search, i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{search.title}</td>
                    <td>{search.datePublished}</td>
                    <td>{search.keyword}</td>
                    <td>{search.abstract}</td>
                    <td>{search.sourcedb}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default List;
