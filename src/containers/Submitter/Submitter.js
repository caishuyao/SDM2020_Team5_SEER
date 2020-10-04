import React, { Component } from "react";
import axios from "axios";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};

class Submitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datePublished: "",
      submitterName: "",
      title: "",
      author: "",
      keyword: "",
      abstract: "",
      sourcedb: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      datePublished,
      submitterName,
      title,
      author,
      keyword,
      abstract,
      sourcedb,
    } = this.state;
    axios
      .post("http://localhost:8080/seersearch/Submitter", {
        datePublished: datePublished,
        submitterName: submitterName,
        title: title,
        author: author,
        keyword: keyword,
        abstract: abstract,
        sourcedb: sourcedb,
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            Date Published
            <input
              name="datePublished"
              type="date"
              value={this.state.datePublished}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Submitter Name
            <input
              name="submitterName"
              type="text"
              value={this.state.submitterName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            title
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Author of Article
            <input
              name="author"
              type="text"
              value={this.state.author}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Keywords
            <input
              name="keyword"
              type="text"
              value={this.state.keyword}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />

          <label>
            Abstract
            <input
              name="abstract"
              type="text"
              value={this.state.abstract}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Database Source
            <input
              name="sourcedb"
              type="text"
              value={this.state.sourcedb}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label></label>
          <br />
          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default Submitter;
