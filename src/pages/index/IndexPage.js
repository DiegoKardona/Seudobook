import React, { Component } from "react";

import "./IndexPage.scss";

//Handle header controls the header component
import Header from "./containers/HandleHeader";
//Handle post controls the newpost component
import NewPost from "./containers/handlePost/HandlePost";
//Handle print posts controls the printPost component
import PrintPosts from "./containers/handlePrintPosts/HandlePrintPosts";

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
              <div id="posts">
                <div id="posts-container">
                  <PrintPosts />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
