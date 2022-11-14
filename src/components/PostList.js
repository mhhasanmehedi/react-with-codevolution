import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        this.setState({ error: "Error retriving data" });
      });
  }
  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
        {this.state.error && <h3>{this.state.error}</h3>}
      </div>
    );
  }
}

export default PostList;
