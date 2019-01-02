import React, { Component } from "react";

import "./IndexPage.scss";

//Handle header control the header component
import Header from "./containers/HandleHeader";
//Handle post control the newpost component
import NewPost from "./containers/handlePost/HandlePost";

/*Importing components*/
import PrintPosts from "./components/post/posts/PrintPosts";

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main-content">
          <div id="left-content">
            <h1>Here is the left content</h1>
          </div>
          <div id="right-content">
            <section id="post-section">
              <NewPost />
              <PrintPosts />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
